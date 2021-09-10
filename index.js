function validAnagram(str1,str2) {
  if (str1.length != str2.length) {
    return false
  }
  let checkValue1 = {};
  let checkValue2 = {};
  
  for (let i of str1) {
    checkValue1[i] = (checkValue1[i] || 0 ) + 1
    console.log(checkValue1)
  }
  for (let i of str2) {
    checkValue2[i] = (checkValue2[i] || 0 ) + 1
    console.log(checkValue2)
  }
  for (let key in checkValue1) {
    if(!(key in checkValue2)) {
      return false;
    }
    if (checkValue2[key] !== checkValue1[key]) {
      return false
    }
  }
  return true;

}
