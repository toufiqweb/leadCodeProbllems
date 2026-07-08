var isAnagram = function(s, t) {
    
    if (s.length !== t.length) {
        return false
    }

    let str = s.split("").sort().join()
    let tsr = t.split("").sort().join()

    if (str === tsr) {
        
        return true
    } else {
        return false
    }
};

console.log(isAnagram("anagram", "agaram"));