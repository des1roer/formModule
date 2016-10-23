var list = {
    'fio': {'name': 'ФИО', 'class': 'check'},
    'client': {'name': 'Клиент', 'list': {'Выберите': '', 'Физ.лицо': 'Физ.лицо', 'Юр.лицо': 'Юр.лицо'}},
    'city': {'name': 'Город', 'list': {'Выберите': '', 'Екатеринбург': 'Екатеринбург', 'Челябинск': 'Челябинск'}},
    'phone': {'name': 'Телефон'},
    'product': {'name': 'Товар'},
    'cnt': {'name': 'Количество', 'class': 'check'},
    'target': {'name': 'Для каких целей'}
};

var myForm = new Form('form', list, 'myForm', 'php/index.php');
myForm.run();

$( document ).on( "click", ".warning", function() {
  $(this).removeClass('warning')
});



