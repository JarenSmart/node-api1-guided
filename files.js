const fs = require("fs");

const dir = "my-files";
fs.mkdirSync(dir);

for (let i = 1; i <= 100; i++) {
  //this is creating a file at `my-files/{num}.txt`
  fs.writeFileSync(`${dir}/${i}.txt`, `Hello from index of ${i}`);
}
