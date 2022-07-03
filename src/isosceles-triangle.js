function drawIsoscelesTriangle(h) {
    let shape = "";
    for(let i = 1; i <= h; i++) {
        // print space
        for(let j = 1; j<= h-i; j++) {
            shape += " ";
        }
        // print star "*"
        for(let k = 1; k <= 2*i-1; k++) {
            shape += "*";
        }
        shape += "\n";
    }
    return shape;
}
console.log(drawIsoscelesTriangle(10));