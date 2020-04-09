/* eslint-disable no-restricted-syntax */
/* eslint-disable import/prefer-default-export */
import cloudinary from 'cloudinary';
import Q from 'q';
import fs from 'fs';

/**
 * Uploader function
 * Accepts:
 * file: each file media or video
 * returns:
 * the whole success object body, pick the property you want
 */

export const uploader = (file, cloudinaryOptions) => {
  cloudinary.config({
    cloud_name: cloudinaryOptions.cloudName,
    api_key: cloudinaryOptions.apiKey,
    api_secret: cloudinaryOptions.apiSecret,
  });

  return Q.promise((resolve, reject) => {
    cloudinary.v2.uploader.upload(file, async (err, result) => {
      if (err) {
        reject(err);
      } else {
        return resolve(result);
      }
      return true;
    });
  });
};

/**
 * UploadMultipleImages method
 * Accepts:
 * files
 * cloudinaryOptions(object): the place your cloudinary config in there
 * returns:
 * an array of cloudinary urls of the image uploaded
 */

export const uploadMultipleImages = async (files, cloudinaryOptions) => {
  const urls = [];

  for (const file of files) {
    const { path } = file;
    const newPath = uploader(path, cloudinaryOptions);
    urls.push(newPath.url);
    fs.unlinkSync(path);
  }
  return urls;
};
