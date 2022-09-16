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