module.exports = function transform(arr) {
  
  const controls = [
    '--discard-next',
    '--discard-prev',
    '--double-next',
    '--double-prev'
  ];

  return arr.reduce((acc, cur, index) => {

    if (controls.includes(cur)) return acc;
    if (arr[index - 1] === '--discard-next') return acc;
    
    if (arr[index - 1] === '--double-next') acc.push(cur, cur);
    else acc.push(cur);

    if (arr[index + 1] === '--discard-prev') acc.splice(acc.length - 1, 1);
    if (arr[index + 1] === '--double-prev') acc.push(cur);

    return acc;
  }, []);
};
