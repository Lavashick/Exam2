var number = 0; // Порядковый номер инцидента
var date; // Дата инцидента
var description; // Описание инцидента
var arr_table = [];

// Поиск элемента по id
function find(id) {
    return document.getElementById(id);
}


// Валидация ввода и взятие данных из формы
find("show-table-btn").addEventListener("click", function () {
    date = find("date").value;
    description = find("description").value;
    if (!(date === "" & description === ""))
        add_to_table(date, description);
});

// Запись данных в массив для таблицы
function add_to_table(date, description) {
    number += 1;
    arr_table[0] = number;
    arr_table[1] = date;
    arr_table[2] = description;
    alert(arr_table[2]);
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
                    show_info();
                }
                form.classList.add('was-validated');
            }, false);
        });
    }, false);
})();




// Валидация на правильность введенного текста
/*(function() {
    'use strict';
    window.addEventListener('load', function() {
        var forms = document.getElementsByClassName('needs-validation');
        var validation = Array.prototype.filter.call(forms, function(form) {
            form.addEventListener('submit', function(event) {
                event.preventDefault();
                event.stopPropagation();
                if (form.checkValidity() === true)
                    show_info()
                form.classList.add('was-validated');
            }, false);
        });
    }, false);
})();*/