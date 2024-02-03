document.addEventListener('DOMContentLoaded', function () {
    const items = document.querySelectorAll('.item');
    const totalElement = document.getElementById('total');
    items.forEach(item => {
        const deleteBtn = item.querySelector('.delete-btn');
        const plusBtn = item.querySelector('.plus-btn');
        const minusBtn = item.querySelector('.minus-btn');
        const quantityValue = item.querySelector('.quantity-value');
        const priceElement = item.querySelector('.price');
        let quantity = parseInt(quantityValue.innerText);
        let price = parseInt(priceElement.innerText.slice(1));
        deleteBtn.addEventListener('click', function () {
            item.remove();
            updateTotal();
            document.body.style.backgroundColor = "red";
            document.body.style.backgroundImage = "none";
        });
        plusBtn.addEventListener('click', function () {
            quantity++;
            quantityValue.innerText = quantity;
            updateTotal();
        });
        minusBtn.addEventListener('click', function () {
            if (quantity > 0) {
                quantity--;
                quantityValue.innerText = quantity;
                updateTotal();
            }
        });
    });
    function updateTotal() {
        let total = 0;
        items.forEach(item => {
            const quantity = parseInt(item.querySelector('.quantity-value').innerText);
            const price = parseInt(item.querySelector('.price').innerText.slice(1));
            total += quantity * price;
        });
        totalElement.innerText = total;
    }
});
var heart = document.querySelectorAll('#hardd');
for (let i = 0; i < heart.length; i++) {
    heart[i].addEventListener("click", function hearts() {
        if (heart[i].style.color === "red") {
            heart[i].style.color = "black"
        } else {
            heart[i].style.color = "red"
        }
    })
}
document.addEventListener('DOMContentLoaded', function () {
    const draggableItems = document.querySelectorAll('.draggable-item');
    draggableItems.forEach(item => {
        item.setAttribute('draggable', 'true');
        item.addEventListener('dragstart', function (event) {
            event.dataTransfer.setData('text/plain', ''); // nécessaire pour Firefox
            this.classList.add('dragging');
        });
        item.addEventListener('dragend', function () {
            this.classList.remove('dragging');
        });
    });
    document.addEventListener('dragover', function (event) {
        event.preventDefault();
    });
    document.addEventListener('drop', function (event) {
        event.preventDefault();
        const draggingItem = document.querySelector('.dragging');
        const dropZone = event.target.closest('.drop-zone');
        if (draggingItem && dropZone) {
            const originalParent = draggingItem.parentElement;
            originalParent.removeChild(draggingItem);
            dropZone.appendChild(draggingItem);
            setTimeout(() => {
                originalParent.appendChild(draggingItem);
            }, 500);
        }
    });
});
document.addEventListener('DOMContentLoaded', function () {
    const dropZone = document.querySelector('.drop-zone');
    dropZone.addEventListener('click', function (event) {
        if (event.target.tagName === 'IMG') {
            const selectedImageSource = event.target.src;
            document.body.style.backgroundImage = `url('${selectedImageSource}')`;
        }
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const monkeyElement = document.getElementById("monkey");
    setTimeout(function () {
        monkeyElement.style.display = "block";
        setInterval(moveMonkey, 5000);
    }, 2000);
    function moveMonkey() {
        let currentBottom = parseInt(monkeyElement.style.bottom) || 0;
        let currentRight = parseInt(monkeyElement.style.right) || 0;
        let windowWidth = window.innerWidth;
        let windowHeight = window.innerHeight;
        let newBottom = Math.floor(Math.random() * (windowHeight - 100));
        let newRight = Math.floor(Math.random() * (windowWidth - 100));
        monkeyElement.style.bottom = newBottom + "px";
        monkeyElement.style.right = newRight + "px";
    }
});
document.addEventListener("DOMContentLoaded", function () {
    const dateTimeElement = document.getElementById("currentDateTime");
    const currentDate = new Date();
    const formattedDateTime = `${currentDate.getDate()}/${currentDate.getMonth() + 1}/${currentDate.getFullYear()} ${currentDate.getHours()}:${currentDate.getMinutes()}:${currentDate.getSeconds()}`;
    dateTimeElement.textContent = formattedDateTime;
});