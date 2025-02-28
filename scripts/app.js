// querySelector to get the input element
numberInput = document.querySelector('#numberInput');
// evenetListner to the numberInputs
numberInput.addEventListener
('input', function() 
    {
        const number = numberInput.value;
        if (number <= -10 || number >= 10) {
            alert('The number should be between -10 and 10');
        }
    }
);
// object
fruit = {
    Name: 'Apple',
    Color: 'Red',
    Taste: 'Sweet'
};
fruitNameElement = document.querySelector('#fruitName');
fruitColorElement = document.querySelector('#fruitColor');
fruitTasteElement = document.querySelector('#fruitTaste');
// Set the fruit properties in the HTML
fruitNameElement.innerHTML = `Name: ${fruit.Name}`;
fruitColorElement.innerHTML = `Color: ${fruit.Color}`;
fruitTasteElement.innerHTML = `Taste: ${fruit.Taste}`;