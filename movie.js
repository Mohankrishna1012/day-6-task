class Movie {
    constructor(title, studio, rating = "PG") {
      this.title = title;
      this.studio = studio;
      this.rating = rating;
    }
    
    static getPG(movieArray) {
      return movieArray.filter(movie => movie.rating === "PG");
    }
  }
  
  
  const casinoRoyale = new Movie("Casino Royale", "Eon Productions", "PG-13");
  
  
  var movies = [
    new Movie("singam1", "Studio1", "PG"),
    new Movie("singam2", "Studio2", "PG-13"),
    new Movie("singam3", "Studio3", "R"),
    new Movie("singam4", "Studio4", "PG"),
  ];
  
  var moviespg = Movie.getPG(movies);
  console.log(moviespg);
  