let randomMessage = [
    "Life happens wherever you are, whether you make it or not",
    "I'm angry at myself",
    "Pride is not the opposite of shame, but its source"
]

const randomGenerator = () => {
    let randomNum = Math.floor(Math.random() * 3);

    console.log(randomMessage[randomNum]);
}

randomGenerator();