document.addEventListener('DOMContentLoaded', function () {
    let table = document.querySelector(".table");
    let tbody = table.getElementsByTagName("tbody");

    for (let tbodyElement of tbody) {
        let trElement = tbodyElement.children;
        for (let tdElement of trElement) {
            let codeContent = tdElement.children.item(2).innerText;
            if (codeContent === 'le_javascript' || codeContent === 'lorem_ipsum') {
                tdElement.style.backgroundColor = "yellow";
            }
        }

    }
})