const Scores = require("./scores");

const contains = [
  {
    teamX: "Touchdown",
  },
  {
    teamX: "Field Goal, Field Goal, ",
  },
  {
    teamY: "Field Goal",
  },
];

describe("Suite de tests", () => {
  test(`Le résultat doit être ${JSON.stringify(contains)}`, () => {
    const result = Scores.findPossibilityFromScores(6, 3);
    expect(result).toBeTruthy();
  });
});
