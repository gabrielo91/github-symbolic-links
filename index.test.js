const { readFile, writeToFile } = require("./");

describe("testing read/write files on common files", () => {
  const ROOT_PATH = "test.txt";
  const NESTED_PATH = "testFolder/inner1/inner2/test.txt";

  beforeAll(() => {
    writeToFile(ROOT_PATH, { flag: "w+" }, "");
    writeToFile(NESTED_PATH, { flag: "w+" }, "");
  });

  it("should write in root folder", () => {
    expect(() =>
      writeToFile(ROOT_PATH, { flag: "w+" }, "root-test-data")
    ).not.toThrow();
  });

  it("should write in nested folder", () => {
    expect(() =>
      writeToFile(NESTED_PATH, { flag: "w+" }, "nested-test-data")
    ).not.toThrow();
  });

  it("should read file in root folder", () => {
    const data = readFile(ROOT_PATH);
    expect(data).toEqual("root-test-data");
  });
  it("should read file in nested folder", () => {
    const data = readFile(NESTED_PATH);
    expect(data).toEqual("nested-test-data");
  });
});

describe("testing read/write files on symbolic links files", () => {
  const ROOT_PATH = "testSymbolic.txt";
  const NESTED_PATH = "nested-test.txt";

  it("should write in root folder", () => {
    expect(() =>
      writeToFile(ROOT_PATH, { flag: "w+" }, "root-test-data")
    ).not.toThrow();
  });

  it("should write in nested folder", () => {
    expect(() =>
      writeToFile(NESTED_PATH, { flag: "w+" }, "nested-test-data")
    ).not.toThrow();
  });

  it("should read file in root folder", () => {
    const data = readFile(ROOT_PATH);
    expect(data).toEqual("root-test-data");
  });
  it("should read file in nested folder", () => {
    const data = readFile(NESTED_PATH);
    expect(data).toEqual("nested-test-data");
  });
});
