
$('a[href="#js-specification-tab0"]').on('click', function (e) {
    e.preventDefault();
    ym(66331015, 'reachGoal', 'total-specs');
    ym(66331015, 'reachGoal', 'insurance_tab');
    console.log('total-specs', 'insurance_tab');
});

$('a[href="#js-specification-tab1"]').on('click', function (e) {
    e.preventDefault();
    ym(66331015, 'reachGoal', 'standart-equipment');
    ym(66331015, 'reachGoal', 'credit_tab');
    console.log('standart-equipment', 'credit_tab');
});

$('a[href="#js-specification-tab2"]').on('click', function (e) {
    e.preventDefault();
    ym(66331015, 'reachGoal', 'additional-equipment');
    console.log('additional-equipment');
});

$('a[href="#js-specification-tab3"]').on('click', function (e) {
    e.preventDefault();
    ym(66331015, 'reachGoal', 'insurance_tab')
    console.log('insurance_tab');
});

$('button[data-target="#get-offer-modal"]').on('click', function (e) {
    e.preventDefault();
    ym(66331015, 'reachGoal', 'get-offer-step-1');
    console.log('get-offer-step-1');
});

$('.js-vehicle-online-credit-form button.js-credit-online-save').on('click', function (e) {
    e.preventDefault();
    ym(66331015, 'reachGoal', 'credit_submit');
    console.log('credit_submit');
});

$('.js-insurance-calculator button.js-insurance-save').on('click', function (e) {
    e.preventDefault();
    ym(66331015, 'reachGoal', 'insurance_submit');
    console.log('insurance_submit');
});

$('.js-vehicle-sberbank-leasing-form button.js-vehicle-leasing-calculate').on('click', function (e) {
    e.preventDefault();

    if ($('.basket--programms .js-leasing-bank:eq(0)').hasClass('checked')) {
        console.log('leasing_euro_submit');
        ym(66331015, 'reachGoal', 'leasing_euro_submit');
    }

    if ($('.basket--programms .js-leasing-bank:eq(1)').hasClass('checked')) {
        console.log('leasing_gazprom_submit');
        ym(66331015, 'reachGoal', 'leasing_gazprom_submit');
    }

    if ($('.basket--programms .js-leasing-bank:eq(2)').hasClass('checked')) {
        console.log('leasing_sovkom_submit');
        ym(66331015, 'reachGoal', 'leasing_sovkom_submit');
    }
});
