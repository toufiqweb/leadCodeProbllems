var compose = function(functions) {
    
    // console.log(functions);
    
    return function(x) {
        
        let result = x

        for (let i = functions.length; i >= 0 ; i--) {
             result = functions[i](result);
            
        }
    }
};


// console.log(functions = [x => x + 1, x => x * x, x => 2 * x], x = 4);
