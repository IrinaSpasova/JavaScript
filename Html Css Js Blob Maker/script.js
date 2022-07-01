const top_left = document.getElementById("top-left");
const bottom_left = document.getElementById("bottom-left");
const top_right = document.getElementById("top-right");
const bottom_right = document.getElementById("bottom-right");
const width = document.getElementById("width");
const height = document.getElementById("height");


const blob = document.querySelector(".blob");

const code = document.getElementById("code");

const copy = document.querySelector(".copy");


var codeText = `border-radius: ${top_left.value}% ${top_right.value}% ${bottom_left.value}% ${bottom_right.value}%`;
code.innerText = codeText;


function handleChange(top_left, top_right, bottom_left, bottom_right) {
    codeText = `border-radius: ${top_left}% ${top_right}% ${bottom_left}% ${bottom_right}% ;`;
    code.innerText = codeText;
}

width.value = '550';
height.value = '550';

width.parentNode.setAttribute('data-attr', width.value)
height.parentNode.setAttribute('data-attr', width.value)

width.oninput = () => {
    //test: console.log(top_left.value);
    blob.style.width = `${width.value}px`;

    width.parentNode.setAttribute('data-attr', width.value)
}

height.oninput = () => {
    //test: console.log(top_left.value);
    blob.style.height = `${height.value}px`;

    height.parentNode.setAttribute('data-attr', height.value)
}

top_left.oninput = () => {
    //test: console.log(top_left.value);
    blob.style.borderTopLeftRadius = `${top_left.value}%`;

    top_left.parentNode.setAttribute('data-attr', top_left.value)

    handleChange(top_left.value,top_right.value,bottom_left.value,bottom_right.value);
}


top_right.oninput = () => {
    //test: console.log(top_left.value);
    blob.style.borderTopRightRadius = `${top_right.value}%`;

    top_right.parentNode.setAttribute('data-attr', top_right.value);
    handleChange(top_left.value,top_right.value,bottom_left.value,bottom_right.value);

}

bottom_left.oninput = () => {
    //test: console.log(top_left.value);
    blob.style.borderBottomLeftRadius = `${bottom_left.value}%`;

    bottom_left.parentNode.setAttribute('data-attr', bottom_left.value);
    handleChange(top_left.value,top_right.value,bottom_left.value,bottom_right.value);

}

bottom_right.oninput = () => {
    //test: console.log(top_left.value);
    blob.style.borderBottomRightRadius = `${bottom_right.value}%`;

    bottom_right.parentNode.setAttribute('data-attr', bottom_right.value);
    handleChange(top_left.value,top_right.value,bottom_left.value,bottom_right.value);

}

copy.addEventListener('click', function(){
    copyCode();
});

function copyCode(){
    var str= code.innerText;
    const holder = document.createElement('textarea')
    holder.value = str;
    document.body.appendChild(holder);

    holder.select();
    document.execCommand('copy');

    document.body.removeChild(holder);

    alert("Code Copied!");
}



