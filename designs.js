// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

function makeGrid(width, height) {
  //makeGrid function declaration to build the design canvas with dimensions width x height
  for (let r = 1; width >= r; r++) {
    $("table").append("<tr></tr>");
    for (let c = 1; height >= c; c++) {
      $("table tr:last").append("<td></td>");
      $("td").addClass("colorClass");
    }
  }
  return $("table");
}



let height, width, color;

$(document).ready(function() {
  $("#sizePicker").submit(function(event) {
    $("table tr").remove()//clear any grid on the screen;
    event.preventDefault();
    const height = $("#inputHeight").val();
    const width = $("#inputWeight").val();
    let color = $("#colorPicker").val();
    $('#colorPicker').change(function(){
      //track and effect changes to the color bar
      color = $(this).val()
    })
    makeGrid(height, width);
  
    $(".colorClass").click(function(event) {
      //inclusion of color in any grid cell clicked on by user
      $(event.target).css("background-color", color);
      
      $('.colorClass').dblclick(function(event){
        //removal of color from a clicked cell already colored
        $(event.target).css('background-color','');
      })
    });
  });
});
