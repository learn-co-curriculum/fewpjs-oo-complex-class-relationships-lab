class Song {
  constructor( title, artist, genre ) {
    this._title = title
    this._artist = artist
    this._genre = genre
  }

  get title() {
    return this._title
  }

  get artist() {
    return this._artist
  }

  get genre() {
    return this._genre
  }
  get caption() {
    return `${this.title} by ${this.artist.name}`
  }
}

class Artist {
  constructor( name ) {
    this._name = name
    this._albums = []
  }

  get name() {
    return this._name
  }

  set name( name ) {
    this._name = name
  }

  get albums() {
    return this._albums
  }

  set albums( albums ) {
    this._albums = albums
  }

  get discography() {
    return this.albums.map( album => album.title )
  }
}

class Album {
  constructor( title, artist, songs ) {
    this._title = title
    this._artist = artist
    this._songs = songs
  }

  get title() {
    return this._title
  }

  get songs() {
    return this._songs
  }

  get artist() {
    return this._artist
  }

  get trackList() {
    return this._songs.map( song => song.title )
  }

  get genres() {
    //should return an array of unique Genre instances (no duplicates)
    let genreArray = this._songs.map( song => song.genre )

    // this is best solution for the ES6
    return [ ...new Set( genreArray ) ]

    //otherwise here is the standard solution:
    // return genreArray.filter((genre, index, self) => self.indexOf(genre) === index)
  }
}

class Genre {
  constructor( name ) {
    this._name = name
  }

  get name() {
    return this._name
  }
}