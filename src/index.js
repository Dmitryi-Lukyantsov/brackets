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
        str = str.replace(index1 + index2, '');
        flag = true;
      };
    }
    if(flag) i = 0;
    if(!flag) i++;
  }
  
  if(str.length) return false;
  
  return true;
}


 