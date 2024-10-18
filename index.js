// Ham them so hoac ky tu vao man hinh
function insert(value) {
    document.getElementById("display").value += value;
    document.getElementById("expression").value += value;
}

// Ham xoa toan bo man hinh
function clearDisplay() {
    document.getElementById("display").value = "";
    document.getElementById("expression").value = "";
    document.getElementById("resultDisplay").textContent = "";
}

// Ham tinh toan ket qua
function calculate() {
    let expression = document.getElementById("expression").value;
    try {
        let result = eval(expression);
        document.getElementById("display").value = result;
        document.getElementById("resultDisplay").textContent = `Ket qua: ${result}`;
    } catch (e) {
        document.getElementById("display").value = "Error";
        document.getElementById("resultDisplay").textContent = "";
    }
}

// Ham xoa ky tu cuoi cung
function backspace() {
    let display = document.getElementById("expression").value;
    document.getElementById("expression").value = display.substring(0, display.length - 1);
}

// Ham thay doi dau am/duong
function toggleSign() {
    let current = document.getElementById("display").value;
    if (current.charAt(0) === '-') {
        document.getElementById("display").value = current.substring(1);
    } else {
        document.getElementById("display").value = '-' + current;
    }
}
