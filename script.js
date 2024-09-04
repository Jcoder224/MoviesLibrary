const movies= [
    {
        "title": "Dawn of the Planet of the Apes",
        "image": "https://upload.wikimedia.org/wikipedia/en/thumb/7/77/Dawn_of_the_Planet_of_the_Apes.jpg/220px-Dawn_of_the_Planet_of_the_Apes.jpg",
        "rating": 8.3,
        "releaseYear": 2014,
        "genre": ["Action", "Drama", "Sci-Fi"]
    },
    {
        "title": "District 9",
        "image": "https://m.media-amazon.com/images/S/pv-target-images/dfa9530b4ac72c0a25dfe193802ed6fa95330222bffab3374ff1cb69eeb9d243.jpg",
        "rating": 8,
        "releaseYear": 2009,
        "genre": ["Action", "Sci-Fi", "Thriller"]
    },
    {
        "title": "Transformers: Age of Extinction",
        "image": "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/d0e81237-0567-491b-8626-29b208a21668/dfhsrrt-ec08e6d3-5b78-4e6e-ba9c-e7501f401f6c.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2QwZTgxMjM3LTA1NjctNDkxYi04NjI2LTI5YjIwOGEyMTY2OFwvZGZoc3JydC1lYzA4ZTZkMy01Yjc4LTRlNmUtYmE5Yy1lNzUwMWY0MDFmNmMuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.8mtJt4d8WU0Hl7_LLlGzfAExrqDwVrNDZdxQFuStBkg",
        "rating": 6.3,
        "releaseYear": 2014,
        "genre": ["Action", "Adventure", "Sci-Fi"]
    },
    {
        "title": "X-Men: Days of Future Past",
        "image": "https://m.media-amazon.com/images/M/MV5BZGIzNWYzN2YtMjcwYS00YjQ3LWI2NjMtOTNiYTUyYjE2MGNkXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg",
        "rating": 8.4,
        "releaseYear": 2014,
        "genre": ["Action", "Sci-Fi", "Thriller"]
    },
    {
        "title": "The Machinist",
        "image": "https://m.media-amazon.com/images/M/MV5BNjk1NzBlY2YtNjJmNi00YTVmLWI2OTgtNDUxNDE5NjUzZmE0XkEyXkFqcGdeQXVyNTc1NTQxODI@._V1_.jpg",
        "rating": 7.8,
        "releaseYear": 2004,
        "genre": ["Drama", "Thriller"]
    },
    {
        "title": "The Last Samurai",
        "image": "https://alternativemovieposters.com/wp-content/uploads/2023/10/Ludo-D.RODRIGUEZ-PASCAL_LastSamurai2.jpg",
        "rating": 7.7,
        "releaseYear": 2003,
        "genre": ["Action", "Drama", "History"]
    },
    {
        "title": "The Amazing Spider-Man 2",
        "image": "https://m.media-amazon.com/images/M/MV5BMjMyOTM4MDMxNV5BMl5BanBnXkFtZTcwNjIyNzExOA@@._V1_.jpg",
        "rating": 7.3,
        "releaseYear": 2014,
        "genre": ["Action", "Adventure", "Fantasy"]
    },
    {
        "title": "Tangled",
        "image": "https://mediaproxy.tvtropes.org/width/1200/https://static.tvtropes.org/pmwiki/pub/images/tangled_5.jpg",
        "rating": 7.9,
        "releaseYear": 2010,
        "genre": ["Action", "Drama", "Sci-Fi"]
    },
    {
        "title": "Rush",
        "image": "https://m.media-amazon.com/images/M/MV5BOWEwODJmZDItYTNmZC00OGM4LThlNDktOTQzZjIzMGQxODA4XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_FMjpg_UX1000_.jpg",
        "rating": 8.3,
        "releaseYear": 2013,
        "genre": ["Animation", "Comedy", "Family"]
    },
    {
        "title": "Drag Me to Hell",
        "image": "https://m.media-amazon.com/images/M/MV5BMTQwNTMyNjc5Ml5BMl5BanBnXkFtZTcwOTI2MTQ0Mg@@._V1_.jpg",
        "rating": 6.7,
        "releaseYear": 2009,
        "genre": ["Horror", "Thriller"]
    },
    {
        "title": "Despicable Me 2",
        "image": "https://images.moviesanywhere.com/f9175891da615a2cf030700474f46679/7895d5cb-5e8c-48b0-8d91-4d0aa769f298.jpg",
        "rating": 7.6,
        "releaseYear": 2013,
        "genre": ["Animation", "Comedy", "Family"]
    },
    {
        "title": "Kill Bill: Vol. 1",
        "image": "https://upload.wikimedia.org/wikipedia/en/2/2c/Kill_Bill_Volume_1.png",
        "rating": 8.2,
        "releaseYear": 2003,
        "genre": ["Action", "Crime"]
    },
    {
        "title": "A Bug's Life",
        "image": "https://m.media-amazon.com/images/M/MV5BNThmZGY4NzgtMTM4OC00NzNkLWEwNmEtMjdhMGY5YTc1NDE4XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg",
        "rating": 7.2,
        "releaseYear": 1998,
        "genre": ["Animation", "Adventure", "Comedy"]
    },
    {
        "title": "Life of Brian",
        "image": "https://m.media-amazon.com/images/M/MV5BMDA1ZWI4ZDItOTRlYi00OTUxLWFlNWQtMzM5NDI0YjA4ZGI2XkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_.jpg",
        "rating": 8.9,
        "releaseYear": 1972,
        "genre": ["Comedy"]
    },
    {
        "title": "How to Train Your Dragon",
        "image": "https://musicart.xboxlive.com/7/21dd0700-0000-0000-0000-000000000002/504/image.jpg?w=1920&h=1080",
        "rating": 8.2,
        "releaseYear": 2010,
        "genre": ["Animation", "Adventure", "Family"]
    }]

console.log(movies.length)
const mainDiv = document.getElementById('main')
function displayData ()
{
    movies.forEach((ele) =>
    {
        const moviesDiv = document.createElement('div');
        moviesDiv.classList.add('movies')
        const image = document.createElement('img');
        image.src = ele.image;
        image.alt = ele.title;
        image.height = "300";
        image.border = "2px solid black"
        const releaseYear = document.createElement('p')
        releaseYear.textContent = "Release Year: " + ele.releaseYear
      
        const title = document.createElement('h2');
        title.textContent = ele.title;
        const genre = document.createElement('p');
        genre.textContent= "Genre: " + ele.genre
        moviesDiv.append(image, title, releaseYear, genre);
        mainDiv.appendChild(moviesDiv)
    })
}
displayData()