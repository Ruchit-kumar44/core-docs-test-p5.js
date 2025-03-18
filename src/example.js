/**
 * This function draws a circle.
 * @param {number} x - The x-coordinate.
 * @param {number} y - The y-coordinate.
 * @param {number} radius - The radius of the circle.
 * @param {string} color - The fill color of the circle.
 * @param {string} [borderColor] - The optional border color.
 */
function drawCircle(x, y, radius, color) {
    fill(color);
    if (borderColor) {
        stroke(borderColor);
    }
    ellipse(x, y, radius);
}
