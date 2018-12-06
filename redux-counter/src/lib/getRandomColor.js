export default function getRandomColor () {
    const colors = [
        '#495057',
        '#f03e0e',
        '#d6336c',
        '#ae3ec9',
        '#f59f00'
    ]

    const random = Math.floor(Math.random() * 5);

    return colors[random];
}

