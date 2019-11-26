var number = 0; // Порядковый номер инцидента
var arr_table = []; // Массив строк
var sum_row = 0; // Порядковый номер строки

// Поиск элемента по id
function find(id) {
    return document.getElementById(id);
}

// Очистка поля данных
find("clear").addEventListener("click", function(){
    find("date").value = "";
    find("description").value = "";
});

// Тело таблицы
var table = find("table-body");

// Валидация по нажатию на кнопку
var forms = document.getElementsByClassName('needs-validation');
Array.prototype.filter.call(forms, function(form) {
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        event.stopPropagation();
        if (form.checkValidity() === true) {
            var date = find("date").value;
            var description = find("description").value;
            add_to_table_array(date, description); // Вызов функции для добавления данных в массив таблицы
        }
        form.classList.add('was-validated');
    }, false);
});

// Запись данных В МАССИВ для таблицы
function add_to_table_array(date, description) {
    number += 1;
    arr_table.push([number, date, description]); // Добавление строки в локальную "таблицу"
    add_to_table(arr_table[arr_table.length - 1]); // Добавление ПОСЛЕДНЕЙ строки из локальной "таблицы" в таблицу html
}

// Добавление новых данных В САМУ ТАБЛИЦУ
function add_to_table(data) {
    let row_index = table.rows.length;
    let row = table.insertRow(row_index); // Создание новой строчки по индексу (вставка)
    for (let i = 0; i < data.length; i++) {
        let cell = row.insertCell(i); // Создание новой ячейки на место i
        cell.innerText = data[i]; // Добавление данных в ячейку в соответствии с i в массиве данных
    }
    let cell = row.insertCell(data.length); // Создание новой ячейки в конце для крестика
    cell.innerHTML = "&#10008;";
    cell.style.color = "red";
    cell.style.cursor = "pointer";
    // Обработка события нажатия на крестик
    cell.addEventListener("click", function () { remove_from_table(row); });
    update_sum_row(); // Обновление данных о таблице снизу
}

// Обновление данных о количестве строк в таблице
function update_sum_row() {
    sum_row = find("main-table").rows.length - 1;
    if (sum_row === -1)
        sum_row = 0;
    find("sum-row").innerText = sum_row.toString(); // Вывод количества в html
}

function remove_from_table(row) {
    let index = row.rowIndex - 1; // Нахождение индекса строки
    arr_table.splice(index, 1); 
    table.deleteRow(index);
    update_sum_row();
}



