// What is between?
function between(a, b) {
    let result = []
    for (let i = a; i <= b; i++) {
        result.push(i)
    }
    return result
  }

  console.log(between(-2, 2));