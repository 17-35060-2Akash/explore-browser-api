document.getElementById('btn-add-name').addEventListener('click', function () {
    const nameField = document.getElementById('name-field');
    const nameValue = nameField.value;
    const valueField = document.getElementById('value-field');
    const fieldValue = valueField.value;

    localStorage.setItem(nameValue, fieldValue);
    nameField.value = ``;
    valueField.value = ``;
});

document.getElementById('btn-remove-name').addEventListener('click', function () {
    const nameField = document.getElementById('name-field');
    const nameValue = nameField.value;
    const valueField = document.getElementById('value-field');
    // valueField.setAttribute('disabled', true);

    localStorage.removeItem(nameValue);
    nameField.value = ``;

});



document.getElementById('btn-clear-all').addEventListener('click', function (event) {
    localStorage.clear();
});
