module.exports = function check(str, bracketsConfig) {
  let brStr = bracketsConfig.join();
  let brArr = [];
  let temporary = '';


  for (let i = 0; i < brStr.length; i += 2) {

    temporary += brStr[i]

    if (temporary.length === 2) {
      brArr.push(temporary);
      temporary = '';
    }

  }
  
  for (let i = 0; i < str.length; ) {
    let index1 = str[i];
    let index2 = str[i+1];
    let flag = false;

    for (let j = 0; j < brArr.length; j++) {

      if (brArr[j] == index1 + index2) {
        str = str.replace(index1, '');
        str = str.replace(index2, '');
        flag = true;
      };
    }
    if(flag) i = 0;
    if(!flag) i++;
  }

  if(str.length) return false;
  
  return true;
}

const config1 = [['(', ')']];
const config2 = [['(', ')'], ['[', ']']];
const config3 = [['(', ')'], ['[', ']'], ['{', '}']];
const config4 = [['|', '|']];
const config5 = [['(', ')'], ['|', '|']];
const config6 = [['1', '2'], ['3', '4'], ['5', '6'], ['7', '7'], ['8', '8']];
const config7 = [['(', ')'], ['[', ']'], ['{', '}'], ['|', '|']];

function check(str, bracketsConfig) {
  let brStr = bracketsConfig.join();
  let brArr = [];
  let temporary = '';


  for (let i = 0; i < brStr.length; i += 2) {

    temporary += brStr[i]

    if (temporary.length === 2) {
      brArr.push(temporary);
      temporary = '';
    }

  }
  
  for (let i = 0; i < str.length; ) {
    let index1 = str[i];
    let index2 = str[i+1];
    let flag = false;

    for (let j = 0; j < brArr.length; j++) {

      if (brArr[j] == index1 + index2) {
        str = str.replace(index1, '');
        str = str.replace(index2, '');
        flag = true;
      };
    }
    if(flag) i = 0;
    if(!flag) i++;
  }

  if(str.length) return false;
  
  return true;
}

//check('()', config1) // true
//check('((()))()', config1) // true
// check('())(', config1) //false
check('([{}])', config3)// true

 