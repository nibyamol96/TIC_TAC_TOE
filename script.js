var x=0;
var o=0;
var win=0;
var tie=0;
var turn = document.getElementById("turn"),
             // boxes => all boxes
            // X_or_O => to set X or O into the box
                boxes = document.querySelectorAll("#main div"), x_o = 0;
                // set event onclick
                for(var i = 0; i < boxes.length; i++){
                    boxes[i].onclick = function(){
                        // not allow to change the value of the box
                        if(this.innerHTML !== "X" && this.innerHTML !== "O" && win==0){
                        if(x_o%2 == 0 ){
                           console.log(x_o);
                           this.innerHTML = "X";
                           turn.innerHTML = "O Turn Now";
                           getWinner();
                           x_o += 1;

                        }else{
                            console.log(x_o);
                           this.innerHTML = "O";
                           turn.innerHTML = "X Turn Now";
                           getWinner();
                           x_o += 1;
                        }
                    }

                    };
                }


                function getWinner(){

                    var box1 = document.getElementById("box1"),
                        box2 = document.getElementById("box2"),
                        box3 = document.getElementById("box3"),
                        box4 = document.getElementById("box4"),
                        box5 = document.getElementById("box5"),
                        box6 = document.getElementById("box6"),
                        box7 = document.getElementById("box7"),
                        box8 = document.getElementById("box8"),
                        box9 = document.getElementById("box9");

                // get all posibilites
                  if(box1.innerHTML !== "" && box1.innerHTML == box2.innerHTML && box1.innerHTML == box3.innerHTML){
                     selectWinnerBoxes(box1,box2,box3);
                     win=1;
                   }

                  else if(box4.innerHTML !== "" && box4.innerHTML == box5.innerHTML && box4.innerHTML == box6.innerHTML){
                     selectWinnerBoxes(box4,box5,box6);
                     win=1;
                   }

                  else if(box7.innerHTML !== "" && box7.innerHTML == box8.innerHTML && box7.innerHTML == box9.innerHTML){
                     selectWinnerBoxes(box7,box8,box9);
                     win=1;
                   }

                else if(box1.innerHTML !== "" && box1.innerHTML == box4.innerHTML && box1.innerHTML == box7.innerHTML){


                     selectWinnerBoxes(box1,box4,box7);
                     win=1;
                   }

                else if(box2.innerHTML !== "" && box2.innerHTML == box5.innerHTML && box2.innerHTML == box8.innerHTML){
                     selectWinnerBoxes(box2,box5,box8);
                     win=1;
                   }
                else if(box3.innerHTML !== "" && box3.innerHTML == box6.innerHTML && box3.innerHTML == box9.innerHTML){
                     selectWinnerBoxes(box3,box6,box9);
                     win=1;
                   }

                else if(box1.innerHTML !== "" && box1.innerHTML == box5.innerHTML && box1.innerHTML == box9.innerHTML){
                     selectWinnerBoxes(box1,box5,box9);
                    win=1;
                   }

                else if(box3.innerHTML !== "" && box3.innerHTML == box5.innerHTML && box3.innerHTML == box7.innerHTML){
                     selectWinnerBoxes(box3,box5,box7);
                     win=1;
                   }
                   else{
                     tie+=1;
                     selecttie(tie);
                    //tie=0;
                   }

                }
           function selecttie(tie){
             if(tie==9){

               t = document.getElementById("ties");
               t.value++;
               //tie=0;
             }

 }


                function selectWinnerBoxes(b1,b2,b3){

                  turn.innerHTML = b1.innerHTML + " Won Congrats";
                  g=document.getElementById("gif");
                document.getElementById('gif').innerHTML = "<img src=\"source.gif\" width=\"300px\" height=\"500px\">";
                  turn.style.color="red";
                  b1.style.color="#ea0009";

                  b2.style.color="#ea0009";
                    b3.style.color="#ea0009";
                  if(b1.innerHTML=='X'){

                      r = document.getElementById("txt1");
                      r.value++;

                    }
                    else {
                      s = document.getElementById("txt2");
                      s.value++;

                    }

            }






function restart(){
                for(var i = 0; i < boxes.length; i++){
                  // boxes[i].classList.remove("win");
                   boxes[i].innerHTML = "";
                   boxes[i].style.color="black"
                   turn.innerHTML = "Let's Play TIC TAC TOE";
                   //turn.style.fontSize = "25px";
                   win=0;
                   tie=0;
  document.getElementById('gif').innerHTML = "";


                }
}

function newgame(){
                for(var i = 0; i < boxes.length; i++){
                  // boxes[i].classList.remove("win");
                   boxes[i].innerHTML = "";
                    boxes[i].style.color="black"
                   turn.innerHTML = "Let's Play TIC TAC TOE";
                   //turn.style.fontSize = "25px";
                   win=0;
                   x_o=0;
                   f= document.getElementById("txt1");
                   f.value=0;
                   g= document.getElementById("txt2");
                   g.value=0;
                   document.getElementById('gif').innerHTML = "";
                   m=document.getElementById('ties');
                   m.value=0;
                }
}
