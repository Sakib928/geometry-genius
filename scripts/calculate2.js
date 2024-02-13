function calculateParallelogramArea(id1, id2, placeId) {
    const base = getInput(id1);
    const height = getInput(id2);
    let area = base * height;
    area = area.toFixed(2);
    placeValue(placeId, area);
}
function calculateEllipseArea(id1, id2, placeId) {
    const a = getInput(id1);
    const b = getInput(id2);
    let area = Math.PI * a * b;
    area = area.toFixed(2);
    placeValue(placeId, area);
}