player1_name=localStorage.getItem("player1_name");
player2_name=localStorage.getItem("player2_name");

player1_score="0";
player2_score="0";

document.getElementById("player1_name").innerHTML="Player 1 Name= " + player1_name;
document.getElementById("player2_name").innerHTML= "Player 2 Name= " + player2_name;

document.getElementById("player1_score").innerHTML=player1_score;
document.getElementById("player2_score").innerHTML=player2_score;

document.getElementById("player_question").innerHTML="Question Turn- "+player1_name;
document.getElementById("player_answer").innerHTML="Answer Turn- "+player2_name;

function send()
{
   get_no1=document.getElementById("word").value;
   get_no2=document.getElementById("word2").value;
   actual_answer = parseInt(get_no1) * parseInt(get_no2);
   
   question_word="<h4 id='number_display'>Q="+get_no1+"X"+get_no2+"</h4>";
   input_box="<br>Answer: <input type='text' id='input_check_box'>";
   check_button="<button class='btn btn-info' onclick='check();'>Check</button>"
   row=question_word+input_box+check_button;
   document.getElementById("output").innerHTML=row;
   document.getElementById("word").value="";
   document.getElementById("word2").value="";
}

function check()
{
   answer= document.getElementById("input_check_box").value;

   if (answer==actual_answer)
   {
      if(answer_turn=="player_1")
        {
            player1_score=player1_score+1;
            document.getElementById("player1_score").innerHTML=player1_score;
        }
        else
        {
            player2_score=player2_score+1;
            document.getElementById("player2_score").innerHTML=player2_score;
        }
   }

   if(question_turn=="player_1")
    {
        question_turn="player_2";
        document.getElementById("player_question").innerHTML="Question turn-"+player2_name;
    }
    else
    {
        question_turn="player_1";
        document.getElementById("player_question").innerHTML="Question turn-"+player1_name;
    }

    if(answer_turn=="player_1")
    {
        answer_turn="player_2";
        document.getElementById("player_answer").innerHTML="Answer turn-"+player2_name;
    }
    else
    {
        answer_turn="player_1";
        document.getElementById("player_answer").innerHTML="Answer turn-"+player1_name;
    }
}