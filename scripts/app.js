const array = [1, 2, [1.1, 1.2, 1.3], 3];
function generateList(array) {
  let dom = `<ul>`;
  for (let i = 0; i < array.length; i++) {
    let point = array[i];
    if (Array.isArray(point)) {
      dom += "<li>";
      dom += generateList(point);
      dom += "</li>";
    } else {
      dom += "<li>" + point + "</li>";
    }
  }
  dom += "</<ul>";
  return dom;
}
const result = generateList(array);
document.write(result);
