$(function() {
  $("form").submit(function(event){
    event.preventDefault();


  var dogBreed = $("#dog").val();
    //alert(dogBreed);
  var favFood = $("#food").val();
    //alert(favFood);
  var favColor = $("#color").val();
    //alert(favColor);
  var favBand = $("#band").val();
    //alert(favBand);

  var arrayOne = [dogBreed, favFood, favColor, favBand];
  //alert(arrayOne);
  console.log(arrayOne);

  var arrayTwo = [arrayOne[1], arrayOne[0], arrayOne[2]];
  // arrayTwo.push(arrayOne[1]); //arrayTwo[0]
  // arrayTwo.push(arrayOne[0]); //arrayTwo[1]
  // arrayTwo.push(arrayOne[2]); //arrayTwo[2]

  $(".output").show();
  $("#arrayTwo-0").text(arrayTwo[0]);
  $("#arrayTwo-1").text(arrayTwo[1]);
  $("#arrayTwo-2").text(arrayTwo[2]);
  });
});
