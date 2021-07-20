var fs = require('fs');
fs.readFile('flag.md', 'utf-8', function (err, data) {
  if (err) throw err;
  console.log(data);
});