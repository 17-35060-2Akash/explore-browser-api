
const showAlert = () => {
    const num = Math.random() * 10;
    console.log(num);
    if (num < 5)
        alert('ki khobor babes!');

}

const askSomething = () => {
    const descision = confirm('Are You coming to the picnic?');
    console.log(descision);
    if (descision === true) {
        alert('Bkash 500 dollers');
    }
    else {
        alert('DGM!');
    }
}

const getInfo = () => {
    const name = prompt('tell us your name:');
    // console.log(name);
    if (!!name) {
        alert('welcome here ' + name);
        console.log(name); 0n
    }

}