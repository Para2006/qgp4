function addUser()
{
    player1_name = document.getElementById("player1_name").value ;
    localStorage.setItem("player1_name",player1_name);
    player2_name = document.getElementById("player2_name").value ;
    localStorage.setItem("player2_name",player2_name);
    window.location = "mathsquiz_page.html";

}

 function send(){
    number1 = document.getElementById("number1").value;
    number2 = document.getElementById("number2").value;
    actual_answer = parseInt(number1) * parseInt(number2);

    question_number = "<h4>" + number1 + " X " + number2 + "</h4";
    input_box = "<br>Answer : <input type='text' id=<input_check_box'>";
    check_button = "<br><br><button class ='btn btn-info' onclick='check()'>Check</button> ";
    row = question_number + input_box + check_button ;

 }

 var firebaseConfig = {
    apiKey: "AIzaSyCcJitb2Wcopb5ZD-j8HLoVCqTcyqPixQ0",
    authDomain: "mathsquiz-2d8dd.firebaseapp.com",
    databaseURL: "https://mathsquiz-2d8dd-default-rtdb.firebaseio.com",
    projectId: "mathsquiz-2d8dd",
    storageBucket: "mathsquiz-2d8dd.appspot.com",
    messagingSenderId: "1024884733293",
    appId: "1:1024884733293:web:8b6be7cef2115d4c745664"
  };
  
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

document.getElementById("Output").innerHTML = row ;
document.getElementById("number1").value = "" ;
document.getElementById("number2").value = "" ;