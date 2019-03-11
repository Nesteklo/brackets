module.exports = function check(str, bracketsConfig) {
  var j = 0;
  var k = 0;
  var m = 0;
  var l = 0;

  for(i = 0; i < str.length; i++){
    if ((str[i] == '(') || (str[i] == '[') || (str[i] == '{') || (str[i] == '1') || 
    (str[i] == '3') || (str[i] == '5')){
      j++;
    }
    if ((str[i] == ')') || (str[i] == ']') || (str[i] == '}') || (str[i] == '2') || 
    (str[i] == '4') || (str[i] == '6')){
      j--;
    }
    if(str[i] == '|'){
      k++;
    }  
    if(str[i] == '7'){
      m++;
    }  
    if(str[i] == '8'){
      l++;
    }  
    if (j < 0) {
      return false;
    }
  } 

  if ((j == 0) && ((k % 2) == 0) && ((m % 2) == 0) && ((l % 2) == 0)){
    return true;
  }
  else{
    return false;
  }
}
