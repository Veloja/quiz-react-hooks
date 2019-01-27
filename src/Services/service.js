export const players = [
    {
        id: 1,
        name: 'LeBron',
        about: 'I\'am the King and the GOAT. Started career in Cleveland, moved to Miami to win 2x ring. Then cameback to Clevelend and beat GSW all by myselft for one more. Now trying to do the same in LA'
    },
    {
        id: 2,
        name: 'Doncic',
        about: 'Slovenian with serbian blood. Best European prospect of all time. Won everything in Europe, now is time to be NBA champion.'
    },
    {
        id: 3,
        name: 'Bogdanovic',
        about: 'Step by step from Zitko basket, Partizan, Fener, Sacramento. Hard work and dedication, no luck - is my goal.'
    }
]

export const questions = [
    {
        id: 1,
        question: 'How many titles LeBron won?',
        answers: [
            { 
                text: 'one',
                clicked: false
            },
            {
                text: 'three',
                clicked: false
            },
            {
                text: 'none',
                clicked: false
            },
            {
                text: 'seven',
                clicked: false
            }
        ],
        correct: 1,
        bingo: false
    },
    {
        id: 2,
        question: 'Where from is Luka Doncic?',
        answers: [
            { 
                text: 'Slovenija',
                clicked: false
            },
            {
                text: 'USA',
                clicked: false
            },
            {
                text: 'Serbia',
                clicked: false
            },
            {
                text: 'Hrvatska',
                clicked: false
            }
        ],
        correct: 0,
        bingo: false
    },
    {
        id: 3,
        question: 'In which club Bogdan started his career?',
        answers: [
            { 
                text: 'Sacramento',
                clicked: false
            },
            {
                text: 'Fener',
                clicked: false
            },
            {
                text: 'Buducnost',
                clicked: false
            },
            {
                text: 'Zitko Basket',
                clicked: false
            }
        ],
        correct: 3,
        bingo: false
    }
]