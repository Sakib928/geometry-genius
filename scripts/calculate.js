function calculateTriangleArea(id1, id2, placeId) {
    const base = getInput(id1);
    const height = getInput(id2);
    let area = 0.5 * base * height;
    area = area.toFixed(2);
    placeValue(placeId, area);
}
function calculateRectangleArea(id1, id2, placeId) {
    const width = getInput(id1);
    const length = getInput(id2);
    let area = width * length;
    area = area.toFixed(2);
    placeValue(placeId, area);
}
function getInput(id) {
    let parameter = document.getElementById(id).value;
    parameter = parseFloat(parameter);
    return parameter;
}
function placeValue(id, value) {
    let getPlace = document.getElementById(id);
    getPlace.innerText = value;
}