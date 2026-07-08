var canConstruct = function (ransomNote, magazine) {
  for (let c of ransomNote) {
    if (!magazine.includes(c)) {
      return false;
    }

    magazine = magazine.replace(c, "");
  }

  return true;
};

console.log(canConstruct("a", "a"));
