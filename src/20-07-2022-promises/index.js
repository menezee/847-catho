const fs = require('fs');
const path = require('path');
const fsPromise = fs.promises;

const filePath = path.join(__dirname, 'file.txt');
const filePath2 = path.join(__dirname, 'file2.txt');
fsPromise
  .readFile(filePath, 'utf-8')
  .then(content => {
    fsPromise
      .readFile(filePath2, 'utf-8')
      .then(content2 => {
        // console.log({ content, content2 });
      });
  });

async function main() {
  const content = await fsPromise.readFile(filePath, 'utf-8');
  const content2 = await fsPromise.readFile(filePath2, 'utf-8');

  console.log('async', { content, content2 });
}

// main();

Promise
  .all([
    fsPromise.readFile(filePath, 'utf-8'),
    fsPromise.readFile(filePath2, 'utf-8'),
  ])
  .then(result => {
    console.log({ result });
  });

// const content = fs.readFileSync(filePath, 'utf-8');
// console.log(content);

console.log('eu antes!');
