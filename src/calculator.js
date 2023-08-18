const calculator = {
    add: (a, b) => a + b,
    subtract: (a, b) => a - b,
    multiply: (a, b) => {
        if(a*b >= 10**8){
            throw new Error("Too big to calculate, its simply infinity");
        }
        
        return a * b;
    },
    divide: (a, b) => {
      if (b === 0) {
        throw new Error("Cannot divide by zero");
      }
      return a / b;
    }
  };
  
  module.exports = calculator;
  