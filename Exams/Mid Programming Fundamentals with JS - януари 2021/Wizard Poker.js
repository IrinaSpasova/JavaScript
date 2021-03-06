function solve(input = []) {
    input.pop();

    let cards = input.shift().split(':');
    let output = [];

    const addCard = (cardName) => {
        if (cards.includes(cardName)) {
            output.push(cardName);

        } else {
            console.log('Card not found.');
        }

    }

    const insertCard = (cardName, index) => {
        if (cards.includes(cardName) && index >= 0 && index < output.length) {
            output.splice(index, 0, cardName);
        } else {
            console.log('Error!');
        }
    }

    const removeCard = (cardName) => {
        let index = output.indexOf(cardName);

        if (index === -1) {
            console.log('Card not found');
        } else {
            output.splice(index, 1);
        }
    }

    const swapCards = (cardOne, cardTwo) => {
        let indexOne = output.indexOf(cardOne);
        let indexTwo = output.indexOf(cardTwo);
        let temp = output[indexOne];
        output[indexOne] = output[indexTwo];
        output[indexTwo] = temp;
    }

    const shuffleDeck = () => {
        output = output.reverse();
    }

    for (const line of input) {
        if (line.includes('deck')) {
            shuffleDeck();
        } else {
            let [command, cardName, index] = line.split(' ');
            if (command === 'Add') {
                addCard(cardName);
            } else if (command === 'Insert') {
                index = Number(index);
                insertCard(cardName, index);
            } else if (command === 'Remove') {
                removeCard(cardName);
            } else if (command === 'Swap') {
                swapCards(cardName, index);
            }
        }
    }
console.log(output.join(' '));
}

solve()


