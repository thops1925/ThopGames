  var y = new Date().getFullYear();
  document.getElementById("y").innerHTML = "Thops Game" + " " + y;


  var score, player;


  function play() {
      let player1 = Math.floor(Math.random() * 6)  + 1;
      let player2 = Math.floor(Math.random() * 6)  + 1;



      let randomImage = "dice" + player1 + ".png"
      let randomImage2 = "dice" + player2 + ".png"


      let imageSrc ="images/" + randomImage ;
      let imageSrc2 = "images/" + randomImage2 ;

      let  image1= document.querySelectorAll("img")[0].setAttribute("src",imageSrc);
      let  image2= document.querySelectorAll("img")[1].setAttribute("src",imageSrc2);





      if (player1  > player2){

          document.querySelector("h1").innerHTML = "Thops Win the game!";
        

      }
      else if (player2 > player1){
        document.querySelector("h1").innerHTML = "Mitch Win the game!"
      }

       else {
        document.querySelector("h1").innerHTML = "Draw!";
      }

  }
