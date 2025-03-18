/**
 * This function draws a circle.
 * @param {number} x - The x-coordinate.
 * @param {number} y - The y-coordinate.
 * @param {number} radius - The radius of the circle.
 * @param {string} color - The fill color to be used.
 
 */
function drawCircle(x, y, radius, color) {
    fill(color);
    ellipse(x, y, radius);
}
