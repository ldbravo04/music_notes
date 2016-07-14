var cNote = document.getElementById("c_note");
var dNote = document.getElementById("d_note");
var eNote = document.getElementById("e_note");
var fNote = document.getElementById("f_note");
var gNote = document.getElementById("g_note");
var aNote = document.getElementById("a_note");
var bNote = document.getElementById("b_note");

$("#c").click(function(){
  cNote.currentTime = 0
  cNote.play();
});
$("#d").click(function(){
  dNote.currentTime = 0
  dNote.play();
});
$("#e").click(function(){
  eNote.currentTime = 0
  eNote.play();
});
$("#f").click(function(){
  fNote.currentTime = 0
  fNote.play();
});
$("#g").click(function(){
  gNote.currentTime = 0
  gNote.play();
});
$("#a").click(function(){
  aNote.currentTime = 0
  aNote.play();
});
$("#b").click(function(){
  bNote.currentTime = 0
  bNote.play();
});

$(document).keydown(function(e){
  //alert(e.key);
  if (e.key == "q"){
    cNote.currentTime = 0;
    cNote.play();
  }
  if (e.key == "w"){
    dNote.currentTime = 0;
    dNote.play();
}
if (e.key == "e"){
  eNote.currentTime = 0;
  eNote.play();
}
if (e.key == "r"){
  fNote.currentTime = 0;
  fNote.play();
}
if (e.key == "t"){
  gNote.currentTime = 0;
  gNote.play();
}
if (e.key == "y"){
  aNote.currentTime = 0;
  aNote.play();
}
if (e.key == "u"){
  bNote.currentTime = 0;
  bNote.play();
}
});
