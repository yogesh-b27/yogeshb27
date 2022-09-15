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