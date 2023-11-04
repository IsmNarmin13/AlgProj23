document.querySelector("ul").style.display = "none";

let arr = []
let sort = 'increase';
let lastNumber = 0;
let i=0;


document.querySelector(".main form .add button").addEventListener("click", async function (e) {
    e.preventDefault();
    let tasks = document.querySelector('.tasks');
    let input = document.querySelector('.inp');
    let li = document.createElement("li");

    if (input.value) {
        document.querySelector('ul').style.display = "block";
        let newItem = {
            content: input.value
        }
        arr.push(newItem);
        i = arr.length;

        li.innerHTML = `<span class="val">${i}<span> ${input.value}</span></span>
             <i onclick="deletes(this)" class="fa-regular fa-circle-xmark remove"></i`;
        li.classList.add('no-list-style');
        input.value = '';
        tasks.appendChild(li);
        document.querySelector(".inpp").style.display = 'none';
        document.querySelectorAll("ul li").forEach(e => {
            if (e.textContent.length > 50) {
                e.classList.add("newClass");
            }
        });
    }
});


document.querySelector('.plus').addEventListener('click', () => {
    document.querySelector(".inpp").style.display = 'block';
})

function deletes(a) {
    let index = Array.from(a.parentElement.parentElement.children).indexOf(a.parentElement);
    arr.splice(index, 1);
    console.log(arr);
    console.log(index)
    a.parentElement.remove();
    
    document.querySelectorAll(".tasks li").forEach((li, newIndex) => {
        li.querySelector('.val').textContent = `${newIndex + 1} ${arr[newIndex].content}`;
    });



    if (arr.length == 0) {
        document.querySelector("ul").style.display = "none";
    }
    else if (arr.length > 0) {
        document.querySelector("ul").style.display = "block";
    }
}

document.querySelector(".toggle-icon").addEventListener('click', () => {
    console.log(sort)
    if (sort === 'increase') {
        arr.sort((a, b) => a.content.localeCompare(b.content));
        sort = 'decrease';
    }
    else if (sort === 'decrease') {
        arr.reverse()
        sort = 'increase';
    }

    updateList();
    if (sort === 'decrease') {
        document.querySelector(".toggle-icon").classList.remove("fa-arrow-up-short-wide");
        document.querySelector(".toggle-icon").classList.add("fa-arrow-down-short-wide");
    } else {
        document.querySelector(".toggle-icon").classList.remove("fa-arrow-down-short-wide");
        document.querySelector(".toggle-icon").classList.add("fa-arrow-up-short-wide");
    }
});

function updateList() {
    let itemsList = document.querySelector('.tasks');
    itemsList.innerHTML = '';

    arr.forEach((item, index) => {
        let li = document.createElement("li");
        li.innerHTML = `<span  class="val">${index + 1}<span> ${item.content}</span></span> 
        <i onclick="deletes(this)" class="fa-regular fa-circle-xmark remove"></i>`;
        li.classList.add('no-list-style');
        itemsList.appendChild(li);
    });
    document.querySelectorAll("ul li").forEach(e => {
        if (e.textContent.length > 50) {
            e.classList.add("newClass");
        }
    });
}
document.querySelector('.my').addEventListener('click', () => {
    document.querySelector('input').value = "";
});