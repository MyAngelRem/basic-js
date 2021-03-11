module.exports = function repeater(str, options) {
  const finalOptions = {
    repeatTimes: options.repeatTimes ? options.repeatTimes : 1,
    separator: options.separator ? options.separator : '+',
    addition: options.addition || typeof(options.addition) === 'boolean' || options.addition === null ? options.addition : '', // ¯\_(ツ)_/¯
    additionRepeatTimes: options.additionRepeatTimes ? options.additionRepeatTimes : 1,
    additionSeparator: options.additionSeparator ? options.additionSeparator : '|'
  };

  let strReps = [];
  const sepReps = [];

  for (let i = 0; i < finalOptions.repeatTimes; i++) strReps.push(str);
  for (let i = 0; i < finalOptions.additionRepeatTimes; i++) sepReps.push(`${finalOptions.addition}`);

  const addSepStr = sepReps.join(finalOptions.additionSeparator);
  strReps = strReps.map((e) => e + addSepStr);

  return strReps.join(finalOptions.separator);
};
  