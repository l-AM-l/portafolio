document.querySelector("h1").addEventListener("click", call);
document.querySelector("h1").addEventListener("moussenner", call);  

function call(){
    alert("ive been ckicked");
    console.log("hello there");
    document.getElementsByTagName("p")[0].innerHTML = "howdy";

    var oopsArray = document.getElementsByClassName("oops");

    for(i=0;i<oopsArray.length;i++){
        oopsArray[i].innerHTML ="the other guy is lying";
    }
   // oopsArray[0].classList.toogle("special");
    document.getElementById("header").style="color:red;";

    var liArray = document.querySelectorAll(".my_numbers li");
    for(i =0; i<liArray.length;i++){
        liArray[i].style="color: green";
        liArray[i].style.fontSize ="2rem"
    }

    document.querySelector("a").setAttribute("href", "https://www.google.com");

    $("li").css("color", "red");

    if($(".my_numbers .s_item").hasClass("super")){
        $(". my_numbers .s_item").removeClass("super");
    }
    else{
        $(".my_numbers .s_item").addClass("super");
    }


    }
