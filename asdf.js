const filename = '/Users/jake/source/hugo-extended/vendor/hugo_extended_0.83.1_macOS-ARM64.tar.gz';
const crypto = require('crypto');
const fs = require('fs');
const hash = crypto.createHash('sha256');



const input = fs.createReadStream(filename);
input.on('readable', () => {
  var data = input.read();
  if (data)
    hash.update(data);
  else {
    console.log(`${hash.digest('hex')} ${filename}`);
  }
});
