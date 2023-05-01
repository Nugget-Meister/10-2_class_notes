function digitalRoot(n) {
  function splitter (number){
    let place = 1;
    let splitTotal = 0;
    for (place = 10; place < number * 10; place *= 10) {
      let current = (number/place);
      let held = Math.floor(((current)-Math.floor(current)) * 10)
      let thisCase = (((current)-Math.floor(current))*10) - held 
      
      if(thisCase > 0.940 && held != 9) {
        held += 1
      }    
      splitTotal += held
    }
    return splitTotal > 10 ? splitter(splitTotal) : splitTotal
  }
  return splitter(n)
}

module.exports = digitalRoot