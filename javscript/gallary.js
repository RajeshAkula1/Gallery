var allImgs=document.images;
for (i=0;i<allImgs.length;i++)
{
    allImgs[i].src=`./Asset/images/img (${i+1}).jpg`
}
function closeImage(){
    document.getElementById("bigImg").style.display="none"
}
function closeEdit(){
    document.getElementById("editContainer").style.display="none"
}
var sourceImg;
function openImage(imgSrc)
{
    document.getElementById("bigImg").style.display="flex"
    sourceImg=imgSrc;
    document.getElementById("disImage").style.backgroundImage=`url("${imgSrc}")`
}
function editImage(){
    document.getElementById("editContainer").style.display="block"
    document.getElementById("imgCon").style.backgroundImage=`url("${sourceImg}")`
} 
var allInp=document.querySelectorAll(".range")
function changeValue(blendVal){
    var blu=allInp[0].value;
    var bright=allInp[1].value;
    var cont=allInp[2].value;
    var grays=allInp[3].value;
    var inv=allInp[4].value;
    var opa=allInp[5].value;
    var sat=allInp[6].value;
    var sep=allInp[7].value;
    var huer=allInp[8].value;
    document.getElementById("imgCon").style.filter=`blur(${blu}px) 
    brightness(${bright}%) 
    saturate(${sat}%) 
    contrast(${cont}%) 
    sepia(${sep}%) 
    invert(${inv}%) 
    hue-rotate(${huer}deg) 
    opacity(${opa}%) 
    grayscale(${grays}%)`
    var rotX=allInp[9].value;
    var rotY=allInp[10].value;
    var rotZ=allInp[11].value;
    var scaX=allInp[12].value;
    var scaY=allInp[13].value;
    var skeX=allInp[14].value;
    var skeY=allInp[15].value;
    var transX=allInp[16].value;
    var transY=allInp[17].value;
    document.getElementById("imgCon").style.transform=`rotateX(${rotX}deg)
    rotateY(${rotY}deg) 
    rotate(${rotZ}deg)
    scaleX(${scaX})
    scaleY(${scaY})
    skewX(${skeX}deg)
    skewY(${skeY}deg)
    translateX(${transX}px)
    translateY(${transY}px)`
    document.getElementById("imgCon").style.mixBlendMode=`${blendVal}`
}
