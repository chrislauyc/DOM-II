// convert html string to html elements
function appendHtmlStr(parent,htmlStr){
    let template = document.createElement('template');
    htmlStr = htmlStr.trim();
    template.innerHTML = htmlStr;
    
    parent.appendChild(template.content.firstChild);
    return parent.lastChild;
};

// make an array of object about the button
let destinations = Array.from(document.querySelectorAll('.content-pick .destination')).map((node)=>{
    return {
        title:node.querySelector('h4').textContent,
        node:node,
        btn:node.querySelector('.btn')
    };
});
// making popup box for signup form
let htmlStr = `
<div class='popup-box'>
<h4>title</h4>
<form>
<label for="fname">First name:</label><br>
<input type="text" id="fname" name="fname"><br>
<label for="lname">Last name:</label><br>
<input type="text" id="lname" name="lname"><br>
<label for="email">Email:</label><br>
<input type="text" id="email" name="email">
</form>
<textarea id="comments" name="comments" rows="5" cols="33">
Please enter your comments here...
</textarea><br>
<button id="submitbtn">Submit</button>
<button id="cancelbtn">Cancel</button>
</div>`;
let box = appendHtmlStr(document.querySelector('div.home'),htmlStr);
box.style.position = 'fixed';
box.style.border = '1px solid black';
box.style.background = '#FFEBCD';
box.style.display = 'none';
box.style.top = '50%';
box.style.transform = 'translateY(-50%)';
box.style.left = '50%';
box.style.transform = 'translateX(-50%)';
box.style.width = '100%';
box.style.padding = '5%';
box.style.textAlign = 'center';

destinations.forEach((dest,i)=>{dest.btn.addEventListener('click',()=>{
    box.querySelector('h4').textContent = destinations[i].title;
    box.style.display = 'inline-block';
})});

box.querySelector('#submitbtn').addEventListener('click',()=>box.style.display = 'none');
box.querySelector('#cancelbtn').addEventListener('click',()=>box.style.display = 'none');
// keydown
document.addEventListener('keydown',(event)=>{
    if(event.code === "Escape"){
        box.style.display = 'none';
    }
});
// mouseup 
document.addEventListener('mousemove',()=>document.querySelector('h1').style.color = 'yellow');
// highlighting hovered containers
let containers = document.querySelectorAll('header.intro, section.content-destination, section.content-pick .destination, section.content-section');
containers.forEach((container,i)=>{
    container.addEventListener('mouseover',()=>containers[i].style.backgroundColor = '#6acff7');
    container.addEventListener('mouseout',()=>containers[i].style.backgroundColor = 'white');
});
// select text
document.querySelector('textarea').addEventListener('select',(event)=>alert(`You selected: ${event.target.value.substring((event.target.selectionStart, event.target.selectionEnd))}`));
// double click
document.querySelectorAll('p').forEach((p)=>p.addEventListener('dblclick',(event)=>event.target.style.color='red'));
// wheel
document.querySelector('img').style.width = '100%';
document.querySelector('img').addEventListener('wheel',(event)=>{
    event.preventDefault();
    event.target.style.width = `${parseFloat(event.target.style.width)+event.deltaY}%`
});
// scroll
let isGreen = false;
document.addEventListener('scroll',()=>{
    if(isGreen){
        document.querySelector('body').style.backgroundColor = 'green';
        isGreen = false;
    }
    else{
        document.querySelector('body').style.backgroundColor = 'grey';
        isGreen = true;
    }
});
// load
document.addEventListener('DOMContentLoaded',()=>{
    document.querySelector('body').style.backgroundColor = 'pink';
});