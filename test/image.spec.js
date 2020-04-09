import assert from 'assert';
import chai from 'chai';
import {imageUpload} from '../src/wrappers/image';

const { expect } = chai;

//    come back to this
   describe('Image upload', () => {
       let cloudinaryOptions;
       before(function () {
        cloudinaryOptions = {
          cloudName: "34",
          apiKey: '233',
          apiSecret: 'ah67',
        };
      });
    // it('should return an ENOENT error if image does not exist', async () => {
    //        const result = await imageUpload('j.png', cloudinaryOptions);
    //     //    console.log(result.error, 'result');
    //        expect(result.error.code).to.equal('ENOENT');
    //        expect(result.error.errno).to.equal(-2);
    //    });
   });