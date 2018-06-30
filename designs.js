function makeGrid(width, height) {
  //makeGrid function declaration to build the design canvas with dimensions width x height
  for (let r = 1; width >= r; r++) {
    //add rows
    $("table").append("<tr></tr>");
    for (let c = 1; height >= c; c++) {
      //add columns. td here also refers to individual grid cells
      $("table tr:last").append("<td></td>");
      //add a class to all the cells
      $("td").addClass("colorClass");
    }
  }
  return $("table");
}



let height, width, color;

$(document).ready(function() {
  $("#sizePicker").submit(function(event)//listening for the user click on submit 
    //and implementing the block of code below {
    $("table tr").remove()//clear any grid on the screen;
    event.preventDefault() //prevent created grid/table from disappearing after clicking the submit button;
    const height = $("#inputHeight").val();
    const width = $("#inputWeight").val();
    let color = $("#colorPicker").val();
    $('#colorPicker').change(function(){
      //track changes to the color bar 
      color = $(this).val() //and adjust the value of the color variable to reflect the new color selected by user
    })
    makeGrid(height, width)//calling the makeGrid function to create the table when user clicks on submit;
  
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
