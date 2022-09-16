const findPossibilityFromScores = (scoreMaxX, scoreMaxY) => {
  const rules = [
    {
      point: 6,
      name: "Touchdown",
    },
    {
      point: 3,
      name: "Field Goal",
    },
    {
      point: 1,
      name: "Point After Touchdown",
    },
  ];
  // Convertion en nombre des valeurs reçues
  const paramsX = parseInt(scoreMaxX, 10);
  const paramsY = parseInt(scoreMaxY, 10);

  let result = [];

  // Compteur par type de points
  rules.forEach((item) => {
    const countX = paramsX / item.point;
    const countY = paramsY / item.point;
    const comma = ", ";
    let name = "";
    if (paramsX > item.point) {
      name = item.name + comma;
    } else if (paramsX <= item.point) {
      name = item.name;
    }
    if (paramsX >= item.point) {
      if (paramsX > 6 || item.point > 1) {
        result.push({ teamX: name.repeat(countX) });
      }
    }

    if (paramsY > item.point) {
      name = item.name + comma;
    } else if (paramsY <= item.point) {
      name = item.name;
    }
    if (paramsY >= item.point) {
      if (paramsY > 6 || item.point > 1) {
        result.push({ teamY: name.repeat(countY) });
      }
    }
  });
  console.log(result);
  return result;
};

module.exports = { findPossibilityFromScores };
