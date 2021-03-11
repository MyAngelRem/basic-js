module.exports = function countCats(matrix) {

  const catsArray = matrix.join(',').split(',');
  let catsCounter = 0;

  catsArray.forEach(el => {
    if (el === '^^') catsCounter++;
  });

  return catsCounter;

};
