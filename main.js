// Model
var grid = [
  [{clicks: 0}, {clicks: 0}, {clicks: 0}],
  [{clicks: 0}, {clicks: 0}, {clicks: 0}],
  [{clicks: 0}, {clicks: 0}, {clicks: 0}]
];

var markGrid = function(row, col) {
  if (!grid[row]) return false;
  grid[row][col].clicks += 1;
  return true;
}

// View
var $grid;
var $markBtn;
var $row;
var $col;

var render = function() {
  $grid.innerHTML = renderGrid(grid);
}

var renderGrid = function(grid){
  var html = '';
  grid.forEach(function(row) {
    html += renderRow(row);
  })
  return html;
}

var renderRow = function(row){
  var html = '<div class="row">';
  row.forEach(function(col){
    html += renderCol(col);
  });
  html += '</div>';
  return html;
}

var renderCol = function(col) {
  var face = getFace(col.clicks);
  var html = '<div class="col">' + face + '</div>';
  return html;
}

var getFace = function(number) {
  switch (number) {
  case 0:
    face = '😶';
    break;
  case 1:
    face = '😕';
    break;
  case 2:
    face = '🙁';
    break;
  case 3:
    face = '☹';
    break;
  case 4:
    face = '🤢';
    break;
  default:
    face = '💀';
    break;
  }
  return face;
}


var handleClick = function(event) {
  var pos = getPosition();
  markGrid(pos.row, pos.col);
  clearPosition();
  render();
}

var addEventListeners = function() {
  $markBtn.addEventListener('click', handleClick)
}

var getPosition = function(){
  var position = {
    row: $row.value,
    col: $col.value
  }
  return position;
}

var clearPosition = function() {
  $row.value = '';
  $col.value = '';
}

// http://stackoverflow.com/questions/4584373/difference-between-window-load-and-document-ready-functionshttp://stackoverflow.com/questions/4584373/difference-between-window-load-and-document-ready-functions
window.onload = function(){
  $grid = document.querySelector('.grid');
  $markBtn = document.querySelector('#mark');
  $row = document.querySelector('input[name=row]');
  $col = document.querySelector('input[name=col]');
  render();
  addEventListeners();
}
