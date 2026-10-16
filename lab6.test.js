const { triangle, allStar, blackJack, sumHeights, mergeTwo, objectShare, makeChocolate, maxMirror, firstSwap } = require("./lab6.js");
// -------------------- Problem 1: triangle(rows) --------------------
describe("triangle(rows)", () => {
  test.each([
    [0, 0],
    [1, 1],
    [2, 3],
    [3, 6],
    [4, 10],
    [5, 15],
    [6, 21],
    [7, 28],
  ])("triangle(%i) -> %i", (rows, expected) => {
    expect(triangle(rows)).toBe(expected);
  });
});

// -------------------- Problem 2: allStar(str) --------------------
describe("allStar(str)", () => {
  test.each([
    ["hello", "h*e*l*l*o"],
    ["abc", "a*b*c"],
    ["ab", "a*b"],
    ["a", "a"],
    ["", ""],
    ["3.14", "3*.*1*4"],
    ["Chocolate", "C*h*o*c*o*l*a*t*e"],
    ["1234", "1*2*3*4"],
  ])("allStar(%j) -> %j", (str, expected) => {
    expect(allStar(str)).toBe(expected);
  });
});

// -------------------- Problem 3: blackJack(a, b) --------------------
describe("blackJack(a, b)", () => {
  test.each([
    [19, 21, 21],
    [21, 19, 21],
    [19, 22, 19],
    [22, 19, 19],
    [22, 50, 0],
    [22, 22, 0],
    [33, 1, 1],
    [1, 2, 2],
    [34, 33, 0],
    [17, 19, 19],
    [18, 17, 18],
    [16, 23, 16],
    [3, 4, 4],
    [3, 2, 3],
    [21, 20, 21]
  ])("blackJack(%i, %i) -> %i", (a, b, expected) => {
    expect(blackJack(a, b)).toBe(expected);
  });
});

// -------------------- Problem 4: sumHeights(heights, start, end) --------------------
describe("sumHeights(heights, start, end)", () => {
  test.each([
    [[5, 3, 6, 7, 2], 2, 4, 6],
    [[5, 3, 6, 7, 2], 0, 1, 2],
    [[5, 3, 6, 7, 2], 0, 4, 11],
    [[5, 3, 6, 7, 2], 1, 1, 0],
    [[1, 2, 3, 4, 5, 4, 3, 2, 10], 0, 3, 3],
    [[1, 2, 3, 4, 5, 4, 3, 2, 10], 4, 8, 11],
    [[1, 2, 3, 4, 5, 4, 3, 2, 10], 7, 8, 8],
    [[1, 2, 3, 4, 5, 4, 3, 2, 10], 8, 8, 0],
    [[1, 2, 3, 4, 5, 4, 3, 2, 10], 2, 2, 0],
    [[1, 2, 3, 4, 5, 4, 3, 2, 10], 3, 6, 3],
    [[10, 8, 7, 7, 7, 6, 7], 1, 4, 1],
    [[10, 8, 7, 7, 7, 6, 7], 1, 5, 2],
  ])(
    "sumHeights(%j, %i, %i) -> %i",
    (heights, start, end, expected) => {
      expect(sumHeights(heights, start, end)).toBe(expected);
    }
  );
});

// -------------------- Problem 5: mergeTwo(arr1, arr2, n) --------------------
describe("mergeTwo(arr1, arr2, n)", () => {
  test.each([
    [["a", "c", "z"], ["b", "f", "z"], 3, ["a", "b", "c"]],
    [["a", "c", "z"], ["c", "f", "z"], 3, ["a", "c", "f"]],
    [["f", "g", "z"], ["c", "f", "g"], 3, ["c", "f", "g"]],
    [["a", "c", "z"], ["a", "c", "z"], 3, ["a", "c", "z"]],
    [["a", "b", "c", "z"], ["a", "c", "z"], 3, ["a", "b", "c"]],
    [["a", "c", "z"], ["a", "b", "c", "z"], 3, ["a", "b", "c"]],
    [["a", "c", "z"], ["a", "c", "z"], 2, ["a", "c"]],
    [["a", "c", "y", "z"], ["a", "c", "y", "z"], 3, ["a", "c", "y"]],
    [["x", "y", "z"], ["a", "b", "z"], 3, ["a", "b", "x"]],
  ])("mergeTwo(%j, %j, %i) -> %j", (arr1, arr2, n, expected) => {
    expect(mergeTwo(arr1, arr2, n)).toEqual(expected);
  });
});

// -------------------- Problem 6: objectShare(obj) --------------------
describe("objectShare(obj)", () => {
  test.each([
    [
      { a: "aaa", b: "bbb", c: "ccc" },
      { a: "aaa", b: "aaa" },
    ],
    [
      { b: "xyz", c: "ccc" },
      { b: "xyz" },
    ],
    [
      { a: "aaa", c: "meh", d: "hi" },
      { a: "aaa", b: "aaa", d: "hi" },
    ],
    [
      { a: "xyz", b: "1234", c: "yo", z: "zzz" },
      { a: "xyz", b: "xyz", z: "zzz" },
    ],
    [
      { a: "xyz", b: "1234", c: "yo", d: "ddd", e: "everything" },
      { a: "xyz", b: "xyz", d: "ddd", e: "everything" },
    ],
  ])("objectShare(%j) -> %j", (obj, expected) => {
    expect(objectShare({ ...obj })).toEqual(expected);
  });
});

// -------------------- Problem 7: makeChocolate(small, big, goal) --------------------
describe("makeChocolate(small, big, goal)", () => {
  test.each([
    [4, 1, 9, 4],
    [4, 1, 10, -1],
    [4, 1, 7, 2],
    [6, 2, 7, 2],
    [4, 1, 5, 0],
    [4, 1, 4, 4],
    [5, 4, 9, 4],
    [9, 3, 18, 3],
    [3, 1, 9, -1],
    [1, 2, 7, -1],
    [1, 2, 6, 1],
    [1, 2, 5, 0],

    [6, 1, 10, 5],
    [6, 1, 11, 6],
    [6, 1, 12, -1],
    [6, 1, 13, -1],
    [6, 2, 10, 0],
    [6, 2, 11, 1],
    [6, 2, 12, 2],
    [60, 100, 550, 50],
    [1000, 1000000, 5000006, 6],
    [7, 1, 12, 7],
    [7, 1, 13, -1],
    [7, 2, 13, 3],
  ])("makeChocolate(%i, %i, %i) -> %i", (s, b, g, expected) => {
    expect(makeChocolate(s, b, g)).toBe(expected);
  });
});

// -------------------- Problem 8: maxMirror() --------------------
describe("maxMirror(nums)", (nums) => {
  test.each([
    [[1, 2, 3, 8, 9, 3, 2, 1], 3],
    [[1, 2, 1, 4], 3],
    [[7, 1, 2, 9, 7, 2, 1], 2],
    [[21, 22, 9, 8, 7, 6, 23, 24, 6, 7, 8, 9, 25, 7, 8, 9], 4],
    [[1, 2, 1, 20, 21, 1, 2, 1, 2, 23, 24, 2, 1, 2, 1, 25], 4],
    // [[1, 2, 3, 2, 1], 5],
    [[1, 2, 3, 3, 8], 2],
    [[1, 2, 7, 8, 1, 7, 2], 2],
    [[1, 1, 1], 3],
    [[1], 1],
    [[], 0],
    [[9, 1, 1, 4, 2, 1, 1, 1], 3],
    [[5, 9, 9, 4, 5, 4, 9, 9, 2], 7],
    [[5, 9, 9, 6, 5, 4, 9, 9, 2], 2],
    [[5, 9, 1, 6, 5, 4, 1, 9, 5], 3],
  ])("maxMirror(%j) -> %i", (arr, expected) => {
    expect(maxMirror(arr)).toBe(expected);
  });
});

// -------------------- Problem 9: firstSwap(arr) --------------------
describe("firstSwap(arr)", () => {
  test.each([
    [["ab", "ac"], ["ac", "ab"]],
    [["ax", "bx", "cx", "cy", "by", "ay", "aaa", "azz"], ["ay", "by", "cy", "cx", "bx", "ax", "aaa", "azz"]],
    [["ax", "bx", "ay", "by", "ai", "aj", "bx", "by"], ["ay", "by", "ax", "bx", "ai", "aj", "bx", "by"]],
    [["ax", "bx", "cx", "ay", "cy", "aaa", "abb"], ["ay", "bx", "cy", "ax", "cx", "aaa", "abb"]],
    [["easy", "does", "it", "every", "ice", "eaten"], ["every", "does", "ice", "easy", "it", "eaten"]],
    [["list", "of", "words", "swims", "over", "lily", "water", "wait"], ["lily", "over", "water", "swims", "of", "list", "words", "wait"]],
    [["4", "8", "15", "16", "23", "42"], ["42", "8", "16", "15", "23", "4"]],
    [["aaa"], ["aaa"]],
    [[], []],
    [["a", "b", "c", "xx", "yy", "zz"], ["a", "b", "c", "xx", "yy", "zz"]],
  ])("firstSwap(%j) -> %j", (words, expected) => {
    expect(firstSwap(words)).toEqual(expected);
  });
});