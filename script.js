var number = 0; // Порядковый номер инцидента
var date; // Дата инцидента
var description; // Описание инцидента
var arr_table = [];
var sum_row = 0;

// Поиск элемента по id
function find(id) {
    return document.getElementById(id);
}

function update_sum_row() {
     sum_row = find("main-table").rows.length - 1;
     if (sum_row === -1)
         sum_row = 0;
     find("sum-row").innerText = sum_row.toString();
}

// Очистка поля данных
find("clear").addEventListener("click", function(){
    find("date").value = "";
    find("description").value = "";
})


// Валидация ввода и взятие данных из формы
find("show-table-btn").addEventListener("click", function () {
    date = find("date").value;
    description = find("description").value;
    if (!(date === "" || description === ""))
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

// Тело таблицы
var table = find("table-body");

// Добавление данных из массива В ТАБЛИЦУ и создание строчек
function add_to_table(arr) {
    var text_html = "<td>" + arr[0] + "</td><td>" + arr[1] + "</td><td>" + arr[2] + "</td>" + "<td>&#10008</td>";
    var new_row = document.createElement('tr');
    new_row.innerHTML = text_html;
    table.appendChild(new_row);
    update_sum_row();
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
                }
                form.classList.add('was-validated');
            }, false);
        });
    }, false);
})();