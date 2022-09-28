var colors = ["yellow", "blue", "green", "purple", "brown", "orange"];
var color = "";
var boxClicked = "";


$(".nav-button").click(function(){
  $(".notes-container").append(`
  <div class="note-box ` + randomColor() + `">
    <i class="remove-note-icon fa-solid fa-circle-xmark fa-2x"></i>
    <div class="note-heading">
      <textarea class="textbox-heading" placeholder="Enter note title..." name="name" rows="2" cols="20"></textarea>
    </div>
    <div class="note-body">
      <textarea class="textbox-body" placeholder="Enter note description here.." name="name" rows="5" cols="30"></textarea>
    </div>
  </div>
  `);

  $(".remove-note-icon").click(function(){
    $(this).closest(".note-box").fadeOut();

  })

})



function randomColor(){
  var randomNum =  Math.floor(Math.random() * colors.length);
  color = colors[randomNum]
  return color;
}
