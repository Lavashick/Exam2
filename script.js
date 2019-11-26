var number = 0; // Порядковый номер инцидента
var date; // Дата инцидента
var description; // Описание инцидента
var arr_table = [];

// Поиск элемента по id
function find(id) {
    return document.getElementById(id);
}

// Тело таблицы
var table = find("main-table").getElementsByTagName("tbody");



// Валидация ввода и взятие данных из формы
find("show-table-btn").addEventListener("click", function () {
    date = find("date").value;
    description = find("description").value;
    if (!(date === "" & description === ""))
        add_to_table_array(date, description);
});

// Запись данных в массив для таблицы
function add_to_table_array(date, description) {
    number += 1;
    arr_table[0] = number;
    arr_table[1] = date;
    arr_table[2] = description;
    add_to_table(arr_table);
}


var createTr = document.createElement("tr");
var createTh = document.createElement("th");
var createTd = document.createElement("td");



function add_to_table(array) {
    var new_row = document.createElement('tr');
    var new_col = new_row.createElement('td');
    new_col.innerText = array[0];
    new_col.innerText = array[1];
    new_col.innerText = array[2];
    table.appendChild(new_row);
}




(function() {
    'use strict';
    window.addEventListener('load', function() {
        var forms = document.getElementsByClassName('needs-validation');
        var validation = Array.prototype.filter.call(forms, function(form) {
            form.addEventListener('submit', function(event) {
                event.preventDefault();
                event.stopPropagation();
                if (form.checkValidity() === true) {
                    show_info()
                }
                form.classList.add('was-validated');
            }, false);
        });
    }, false);
})();


