const findPossibilityFromScores = (scoreMaxX, scoreMaxY) => {
  const typePoints = ["Touchdown", "FieldGoal", "PointAfterTouchdown"];
  // Convertion en nombre des valeurs reçues
  const paramsX = parseInt(scoreMaxX, 10);
  const paramsY = parseInt(scoreMaxY, 10);

  let result = [];

  // Compteur par type de points
  const countTouchdownX = paramsX / 6;
  const countTouchdownY = paramsY / 6;
  const countFieldGoalX = paramsX / 3;
  const countFieldGoalY = paramsY / 3;
  const countPatX = paramsX / 1;
  const countPatY = paramsY / 1;

  // Gestion du cas de la virgule
  let touchdownX = "Touchdown";
  let fieldGoalX = "Field goal";
  let touchdownY = touchdownX;
  let fieldGoalY = fieldGoalX;

  const comma = ", ";

  if (countTouchdownX >= 2) {
    touchdownX += comma;
  }
  if (countTouchdownY >= 2) {
    touchdownY += comma;
  }

  if (countFieldGoalX >= 2) {
    fieldGoalX += comma;
  }
  if (countFieldGoalY >= 2) {
    fieldGoalY += comma;
  }

  // Insertion des résultats dans le tableau
  result.push({ teamX: touchdownX.repeat(countTouchdownX) });
  result.push({ teamX: fieldGoalX.repeat(countFieldGoalX) });

  result.push({ teamY: touchdownY.repeat(countTouchdownY) });
  result.push({ teamY: fieldGoalY.repeat(countFieldGoalY) });

  return result;
};

module.exports = { findPossibilityFromScores };
