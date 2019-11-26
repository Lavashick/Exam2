var number = 0; // Порядковый номер инцидента
var date; // Дата инцидента
var description; // Описание инцидента
var arr_table = [];
var sum_row = 0;
var all_table_values;

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
});


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
    var text_html = "<td>" + arr[0] + "</td><td>" + arr[1] + "</td><td>" + arr[2] + "</td>" + "<td style='cursor: pointer; color: red;' onclick='delete_row()'>&#10008</td>";
    var new_row = document.createElement('tr');
    new_row.innerHTML = text_html;
    new_row.id = "number" + arr[0];
    new_row.
    table.appendChild(new_row);
    update_sum_row();
}

function delete_row() {

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

/*

// Запись данных в массив для таблицы
function add_to_table_array(date, description) {
    number += 1;
    arr_table.push([number, date, description]);
    add_to_table(arr_table[number - 1]);
}
*/
/*
// Тело таблицы
var table = find("table-body");

function add_to_table(data) { // Просто добавление новых данных
    let row_index = table.rows.length;
    let row = table.insertRow(row_index); // Создание новой строчки
    for (let i = 0; i < data.length; i++) {
        let cell = row.insertCell(i); // Создание новой ячейки
        cell.innerText = data[i]; // Добавление данных в нее
    }
    let cell = row.insertCell(data.length);
    cell.innerHTML = "&#10008;";
    cell.style.color = "red";
    cell.addEventListener("click", function () { remove_from_table(row); });
    // Данные генерируются в таблице в реальном времени, так как все работает через ссылки (getElementById возвращает ссылку,
    // insertCell возвращает ссылку на объект и тд
    update_sum_row();
}

function remove_from_table(row) {
    let index = row.rowIndex - 1;
    arr_table.splice(index, 1);
    table.deleteRow(index);
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
                    var date = find("date").value;
                    var description = find("description").value;
                    add_to_table_array(date, description);
                }
                form.classList.add('was-validated');
            }, false);
        });
    }, false);
})();
 */