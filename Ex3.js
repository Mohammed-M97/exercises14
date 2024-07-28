// Expressions Matter
function expressionMatter(a, b, c) {
  let output = [a + b + c, a * b * c, (a + b) * c, a + (b + c), a + b * c];
  return Math.max(...output);
}

console.log(expressionMatter(2, 10, 3));
