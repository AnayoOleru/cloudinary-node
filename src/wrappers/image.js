import cloudinary from 'cloudinary';

/**
 * The file should be the direct, where the local image is directly
 * Returns the full object, get the url from the object or any other path
 * you want from the object
 */
export const imageUpload = async (filePath, cloudinaryOptions) => {
  cloudinary.config({
    cloud_name: cloudinaryOptions.cloudName,
    api_key: cloudinaryOptions.apiKey,
    api_secret: cloudinaryOptions.apiSecret,
  });

  try {
    await cloudinary.v2.uploader.upload(filePath, async (err, result) => {
      if (err) {
        return err;
      }
      return result;
    });
  } catch (error) {
    return error;
  }
  return false;
};

// export default {
//   imageUpload,
// };
