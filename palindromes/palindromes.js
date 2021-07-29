const palindromes = function (str) {
   
    processedString = str.toLowerCase().replace(/[^A-Za-z]/g, "");
   for(let i=0;i<Math.round(processedString.length/2);i++){
  
        if(processedString[i] != processedString[processedString.length - i-1]){
            return false;
    }
}
return true;

 
};

module.exports = palindromes;
