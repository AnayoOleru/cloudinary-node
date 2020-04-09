/**
 * Path checker
 * Check video path
 * Check image path
 * Get Metadata from cloudinary
 */

import cloudinary from 'cloudinary';

const videoExtensions = ['mp4'];
const imageExtensions = ['png', 'jpg', 'jpeg'];


/**
 * check if path is image or video
 * Path: should be a string
 * Accepts:
 * isAVideo: local path or online path
 * returns boolean
 * isAImage: local path or online path
 * returns boolean
 */
export const isAVideo = (path) => {
  for (let i = 0; i < videoExtensions.length; i++) {
    const extension = videoExtensions[i];
    if (path.endsWith(extension)) return true;
  }
  return false;
};

export const isAnImage = (path) => {
  for (let i = 0; i < imageExtensions.length; i++) {
    const extension = imageExtensions[i];
    if (path.endsWith(extension)) return true;
  }
  return false;
};


/**
 * Metadata
 * Accepts: 
 * publicID(string), 
 * path{cloudinary link}(string),
 * cloudinaryOptions: {cloudName, apiKey, apiSecret} (object)
 * returns full object
 */

export const getMetadata = async (id, path, cloudinaryOptions) => {

    cloudinary.config({
        cloud_name: cloudinaryOptions.cloudName,
        api_key: cloudinaryOptions.apiKey,
        api_secret: cloudinaryOptions.apiSecret
        });

        await cloudinary.v2.uploader.explicit(id,
            {
                image_metadata: true,
                type: 'upload',
                resource_type: isAVideo(path) ? 'video' : 'image',
            },
            (error, result) => {
                if (error) return error;
                return result
            });
};
