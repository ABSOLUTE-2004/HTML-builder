const fs = require('fs');
const path = require('path');
fs.rm(
  path.join(__dirname, 'files-copy'),
  { recursive: true, force: true },
  (err) => {
    if (err) throw err;
    copyDir('files');
  },
);
function copyDir(src) {
  const srcDir = path.join(__dirname, src);
  const distDir = path.join(__dirname, 'files-copy');
  fs.mkdir(distDir, { recursive: true }, (err) => {
    if (err) throw err;
  });
  fs.readdir(srcDir, (err, files) => {
    if (err) throw err;
    files.forEach((file) => {
      const srcFilePath = path.join(srcDir, file);
      const distFilePath = path.join(distDir, file);
      fs.copyFile(srcFilePath, distFilePath, (err) => {
        if (err) throw err;
      });
    });
  });
}
