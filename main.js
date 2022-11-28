let btn = document.getElementById('btn');
let output = document.getElementById('output');
let quotes =
    [
        'There is no better than adversity. Every defeat, every heartbreak, every loss, contains its own seed, its own lesson on how to improve your performance next time.',
        'My alma mater was books, a good library… I could spend the rest of my life reading, just satisfying my curiosity.',
        'Any time you beg another man to set you free, you will never be free. Freedom is something that you have to do for yourselves.',
        'I have no mercy or compassion in me for a society that will crush people, and then penalize them for not being able to stand up under the weight.',
        'Without education, you are not going anywhere in this world.',
        'It is a time for martyrs now, and if I am to be one, it will be for the cause of brotherhood. Thats the only thing that can save this country.',
        'Right now, in every big city ghetto, tens of thousands of yesterdays and todays school dropouts are keeping body and soul together by some form of hustling in the same way I did.',
        'All of us—who might have probed space, or cured cancer, or built industries—were, instead, black victims of the white man American social system.',
        'When ghetto living seems normal, you have no shame, no privacy.'

    ];

btn.addEventListener('click', function () {
    var randomQuote = quotes[Math.floor(Math.random() * quotes.length)]
    output.innerHTML = randomQuote;

})