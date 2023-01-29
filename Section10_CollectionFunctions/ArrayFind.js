let movies = [
    'The Fantastic Mr Fox',
    'Mr and Mrs Smith',
    'Mrs Doubtfire',
    'Mr Deeds'
]

const movie = movies.find(movie => {
    return movie.includes('Mrs')
})

console.log(movie)


const books = [{
    title: 'Good Omens',
    authors: ['Terry Pratchett', 'Neil Gaiman'],
    rating: 4.25
},
    {
        title: 'Bone: The Complete Edition',
        authors: ['Jeff Smith'],
        rating: 4.42
    },
    {
        title: 'American Gods',
        authors: ['Neil Gaiman'],
        rating: 4.11
    },
    {
        title: 'A Gentleman in Moscow',
        authors: ['Amor Towles'],
        rating: 4.36
    }
]
//Find first book w/ rating over 4.3
const goodBook = books.find(b => b.rating >= 4.3);
console.log(goodBook)
