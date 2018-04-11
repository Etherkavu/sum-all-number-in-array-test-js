function sumItems(array) {
  var result = 0;
  for (item of array) {
    if(!Array.isArray(item)){
      result += item;
    } else {
      result += sumItems(item);
    }
  }
   return result;
}

module.exports = sumItems;
