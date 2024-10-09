const inputBox = document.getElementById('input-Box');
const list = document.getElementById('list');

//هاي الدالة نخليها بالزر, وظيفتها تضيف تاسكات جديدة وتطبع رسالة خطا اذا الانبوت تكست فارغ
function addTask() {
    if (inputBox.value === '') {
        alert("You most add somthing!");
    } else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        list.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span)
    }
    inputBox.value = ""
}

list.addEventListener("click", function (e) {
    if (e.target.tagName == "LI") {
        e.target.classList.toggle("chacked")
    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
    }
}, false)
