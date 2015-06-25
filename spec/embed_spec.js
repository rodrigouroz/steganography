var Steganographer = require('../lib/steganography');
var fs = require('fs');
var crypto = require('crypto');

jasmine.DEFAULT_TIMEOUT_INTERVAL = 30000;

describe("Embed", function () {

  beforeAll(function (done) {

    Steganographer.embed(__dirname + '/resources/host.jpg', __dirname + '/resources/guest.jpg', __dirname + '/resources/output')
      .then(
        function () {
          done();
        }
      );
  });

  it("should be able to embed a file", function () {

    var data = fs.readFileSync(__dirname + '/resources/output.png');

    expect(data).not.toBeNull();

  });

  // TODO: Add a test with password (check that a file with a password is different than without)

  afterAll(function () {
    fs.unlinkSync(__dirname + '/resources/output.png');
  });

});