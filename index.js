const fs = require("fs");

function writeToFile(path, params = { flag: "a+" }, content) {
  try {
    const data = fs.writeFileSync(
      path,
      content || `this is a test made at: ${new Date()} \n`,
      { ...params }
    );
  } catch (err) {
    console.error(err);
    throw err;
  }
}

function readFile(path) {
  try {
    const data = fs.readFileSync(path, "utf8");
    return data;
  } catch (err) {
    console.error(err);
    throw err;
  }
}

const PATH = "folder/innerFolder1/innerFolder2/test.txt";

readFile(PATH);
writeToFile(PATH);

module.exports = {
  readFile,
  writeToFile,
};
