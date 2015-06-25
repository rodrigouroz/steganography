var Steganographer = require('../lib/steganography');
var fs = require('fs');
var crypto = require('crypto');

jasmine.DEFAULT_TIMEOUT_INTERVAL = 30000;

describe("DigUp", function () {
  
  beforeAll(function (done) {

    Steganographer.digUp(__dirname + '/resources/embedded.png', __dirname + '/resources')
      .then(
        function () {
          done();
        }
      );
    
  });

  it("should be able to dig up a file", function () {

    var data = fs.readFileSync(__dirname + '/resources/digged-guest.jpg');

    expect(data).not.toBeNull();

  });

  it("the file retrieved must equal the original file", function () {

    var data;
    var shasum;

    data = fs.readFileSync(__dirname + '/resources/guest.jpg');
    shasum = crypto.createHash('sha1');
    shasum.update(data);
    var originalHash = shasum.digest('hex');

    data = fs.readFileSync(__dirname + '/resources/digged-guest.jpg');

    shasum = crypto.createHash('sha1');
    shasum.update(data);
    var outputHash = shasum.digest('hex');

    expect(outputHash).toEqual(originalHash);

  });

  // TODO: Add a test with password (fail to recover a file without a password and then pass with the password)

  afterAll(function () {
    fs.unlinkSync(__dirname + '/resources/digged-guest.jpg');
  });

});