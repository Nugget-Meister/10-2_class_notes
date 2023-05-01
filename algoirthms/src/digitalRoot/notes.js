function digitalRoot(n) {

    function splitter (number){
      let place = 1
      let splitTotal = 0
      
      console.log("starting number",number)
  
      for(place = 10; place < number*10; place *= 10) {
        let current = (number/place)
        held = Math.floor(((current)-Math.floor(current)) * 10)
  
      
      // console.log("number place",current)
      // console.log(((current)-Math.floor(current)))
      // console.log((((current)-Math.floor(current))*10)-held)
  
  
      let thisCase = (((current)-Math.floor(current))*10) - held 
      
      if(thisCase > 0.940 && held != 9) {
        // console.log("added for bad math")
        held += 1
      }
      // console.log((((current)-Math.floor(current)) * 10) - held)
      
      splitTotal += held
      
      // console.log(held)
      // console.log(current)
      // console.log(held, splitTotal)
      // console.log(Math.floor(held*10))
      // console.log(Math.floor(current))
      // console.log(Math.floor(n/place))
      // console.log(place)
      } 
      console.log("final total:",splitTotal)
  
      if (splitTotal > 10){
        // console.log("Larger than 10",splitTotal)
        return splitter(splitTotal)
      } else {
        // console.log("Unable to continue",splitTotal)
        return splitTotal
      }
        
    }
    // return 1
    // console.log(1)
    // console.log(splitter(n))
    return splitter(n)
  }
  
  digitalRoot(999999999)
  module.exports = digitalRoot