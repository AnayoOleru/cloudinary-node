import assert from 'assert';
import chai from 'chai';
import {isAVideo, isAnImage, getMetadata} from '../src/wrappers/pathChecker';

const { expect } = chai;

describe('Video checker', function () {
 it('should return true if file is video extension', () => {
        const result = isAVideo('anayo.mp4');
        assert.equal(result, true);
    });
    it('should return false if file is not video extension', () => {
        const result = isAVideo('anayo.png');
        assert.equal(result, false);
    });
});

describe('Image checker', function () {
    it('should return true if file is a png extension', () => {
           const result = isAnImage('anayo.png');
           assert.equal(result, true);
       });
       it('should return true if file is a jpg extension', () => {
           const result = isAnImage('anayo.jpg');
           assert.equal(result, true);
       });
       it('should return true if file is a jpeg extension', () => {
        const result = isAnImage('anayo.jpeg');
        assert.equal(result, true);
    });
    it('should return false if file none is an image extension', () => {
        const result = isAnImage('anayo.pdf');
        assert.equal(result, false);
    });
   });

//    come back to this
//    describe('Get metadata', () => {
//        let cloudinaryOptions;
//        before(function () {
//         cloudinaryOptions = {
//           cloudName: "23",
//           apiKey: '44',
//           apiSecret: '122Add',
//         };
//       });
//     it('should return an object', async () => {
//            const result = await getMetadata('sample', 'http://res.cloudinary.com/demo/image/upload/v1371282172/sample.jpg', cloudinaryOptions);
//            expect(result).to.be.an('object');
//            done();
//        });

//    });