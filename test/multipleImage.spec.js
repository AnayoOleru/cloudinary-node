import assert from 'assert';
import chai from 'chai';
import {uploader, uploadMultipleImages} from '../src/wrappers/multipleImages';

const { expect } = chai;

//    come back to this
   describe('Multiple Images upload', () => {
       let cloudinaryOptions;
       before(function () {
        cloudinaryOptions = {
          cloudName: "34",
          apiKey: '233',
          apiSecret: 'ah67',
        };
      });
    // it('should return an ENOENT error if image does not exist', async () => {
    //        const result = await uploader('j.png', cloudinaryOptions);
    //        console.log(result.error, 'YY>>');
    //        expect(result.error.code).to.equal('ENOENT');
    //        expect(result.error.errno).to.equal(-2);
    //        done();
    //    });
   });