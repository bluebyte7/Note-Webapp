// console.log('my-note app.js');

//DOM
var storage = window.localStorage;
var memo = document.getElementById('memo');
var btn_savenote = document.getElementById('btn-savenote');
var btn_savenote_file = document.getElementById('btn-savenote-file');
var btn_newnote = document.getElementById('btn-newnote');
var btn_fullscreen = document.getElementById('btn-fullscreen');
var btn_about = document.getElementById('btn-about');
var about = document.getElementById('about');

var saveNote = function () {
  // console.log('Try: save note');
  storage.setItem('note', memo.value);
  alert('저장완료');
  // console.log('Done: save note');
};

var readExistNote = function() {
  // console.log('Try: read note');
  if (storage.length !== 0) {
    memo.value = storage.getItem('note');
    // console.log('Done: read note');
  }
  // console.log('Done: note is not exist.');
}

var newNote = function () {
  memo.value = '';
  // console.log('new note');
}

var saveFile = function() {
  var blob = new Blob([memo.value], {type: "text/plain;charset=utf-8"});
  saveAs(blob, 'MyNote.txt');
}

var fullScreen = function () {
  if (screenfull.enabled) {
    screenfull.request();
  } else {
    alert('전체화면을 할 수 없습니다.');
  }
}

var aboutView = function () {
  about.style.display = "block";
}

var aboutClose = function() {
  about.style.display = "none";
}


document.addEventListener('DOMContentLoaded', readExistNote);
btn_savenote.addEventListener('click', saveNote);
btn_newnote.addEventListener('click', newNote);
btn_savenote_file.addEventListener('click', saveFile);
btn_fullscreen.addEventListener('click', fullScreen);
btn_about.addEventListener('click', aboutView);
about.addEventListener('click', aboutClose);
