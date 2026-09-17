const movies = [
    {
        title: 'The Dark Knight',
        year: 2008,
        genre: ['Action', 'Crime', 'Drama'],
        mood: 'thrilling',
        description: 'A gripping battle between Batman and the Joker that keeps the tension high throughout.'
    },
    {
        title: 'Forrest Gump',
        year: 1994,
        genre: ['Drama', 'Comedy'],
        mood: 'feel-good',
        description: 'A heartwarming journey through major historical events seen through one extraordinary life.'
    },
    {
        title: 'Inception',
        year: 2010,
        genre: ['Sci-Fi', 'Action', 'Thriller'],
        mood: 'thought-provoking',
        description: 'A layered dream-heist story that challenges perception, memory, and reality.'
    },
    {
        title: 'Inside Out',
        year: 2015,
        genre: ['Animation', 'Comedy', 'Adventure'],
        mood: 'emotional',
        description: 'An imaginative and emotional story about growing up and understanding feelings.'
    },
    {
        title: 'The Grand Budapest Hotel',
        year: 2014,
        genre: ['Comedy', 'Adventure'],
        mood: 'feel-good',
        description: 'A stylish and witty adventure with memorable characters and delightful storytelling.'
    },
    {
        title: 'Interstellar',
        year: 2014,
        genre: ['Sci-Fi', 'Drama', 'Adventure'],
        mood: 'thought-provoking',
        description: 'A visually stunning exploration of love, time, and survival across the universe.'
    },
    {
        title: 'Mad Max: Fury Road',
        year: 2015,
        genre: ['Action', 'Adventure', 'Thriller'],
        mood: 'thrilling',
        description: 'A high-octane chase with spectacular action and relentless momentum.'
    },
    {
        title: 'Coco',
        year: 2017,
        genre: ['Animation', 'Fantasy', 'Drama'],
        mood: 'emotional',
        description: 'A vibrant celebration of family, memory, and music with strong emotional depth.'
    }
];

const moodSelect = document.getElementById('moodSelect');
const genreSelect = document.getElementById('genreSelect');
const recommendBtn = document.getElementById('recommendBtn');
const recommendationCard = document.getElementById('recommendationCard');
const emptyState = document.getElementById('emptyState');

const movieTitle = document.getElementById('movieTitle');
const movieYear = document.getElementById('movieYear');
const movieGenre = document.getElementById('movieGenre');
const movieMood = document.getElementById('movieMood');
const movieDescription = document.getElementById('movieDescription');

recommendBtn.addEventListener('click', () => {
    const selectedMood = moodSelect.value;
    const selectedGenre = genreSelect.value;

    const filteredMovies = movies.filter((movie) => {
        const moodMatch = selectedMood === 'all' || movie.mood === selectedMood;
        const genreMatch = selectedGenre === 'all' || movie.genre.includes(selectedGenre);
        return moodMatch && genreMatch;
    });

    if (filteredMovies.length === 0) {
        recommendationCard.classList.add('hidden');
        emptyState.classList.remove('hidden');
        return;
    }

    const randomMovie = filteredMovies[Math.floor(Math.random() * filteredMovies.length)];

    movieTitle.textContent = randomMovie.title;
    movieYear.textContent = String(randomMovie.year);
    movieGenre.textContent = randomMovie.genre.join(', ');
    movieMood.textContent = randomMovie.mood;
    movieDescription.textContent = randomMovie.description;

    emptyState.classList.add('hidden');
    recommendationCard.classList.remove('hidden');
});
