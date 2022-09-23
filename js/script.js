//3d sphere tagcloud.js
const text=['HTML','CSS','JAVASCRIPT','C','JAVA','PYTHON','C++'
            ,'MYSQL','UI/UX'];
var tagCloud = TagCloud('.Sphere',text,{
    radius :125,
    maxspeed:'fast',
    initspeed:'fast',
    direction: 135,
    keep: true
});

//load more
let loadBtn = document.querySelector('#load-more');
let currentItem = 3;
loadBtn.onclick =() => {
    let boxes = [...document.querySelectorAll('.project-box')];
    for(var i = currentItem; i<currentItem+3;i++){
        boxes[i].style.display = 'inline-block';
    }
    currentItem+=3;
    if(currentItem>=boxes.length){
        loadBtn.style.display = 'none';
    }
}

//email js
let sendBtn = document.querySelector('#send-btn');
let pattern = /^[^ ]+@+[^ ]+\.[a-z]{2,3}$/;
sendBtn.onclick = (e) =>{
    e.preventDefault();
    names = document.querySelector("#name").value;
    email = document.querySelector("#email").value;
    message = document.querySelector("#message").value;
    params = {names ,email , message};
    if(names==""||email==""||message==""){
        emptyError();
    }
    if(email.match(pattern)){  
        emailjs.send("service_nddsflu","template_xvsxg8l",params).then(
            () =>{
                document.querySelector("#name").value="";
                document.querySelector("#email").value="";
                document.querySelector("#message").value="";
                success();
            }
            );
    }else{
        emailError()
    }
}
function emailError(){
    swal({
        title: "Oh no....",
        text: "Email is not correct!",
        icon: "error",
      });
}
function emptyError(){
    swal({
        title: "Oh no....",
        text: "Fields cannot be empty!",
        icon: "error",
      });
}
function success(){
    swal({
        title: "Email sent successfully",
        text: "I will reply you soon!",
        icon: "success",
      });
}
