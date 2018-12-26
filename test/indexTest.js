describe( "index.js", () => {

  describe( "Genre", () => {
    let rock
    let pop
    let soul
    before( () => {
      rock = new Genre( "Rock" )
      pop = new Genre( "Pop" )
      soul = new Genre( "Soul" )
    } )

    it( "has `name` property", () => {
      expect( rock._name ).to.equal( "Rock" )
      expect( pop._name ).to.equal( "Pop" )
      expect( soul._name ).to.equal( "Soul" )
    } )
  } )

  describe( "Song", () => {
    let rock
    let artist
    let purpleRain
    before( () => {
      rock = new Genre( "Rock" )
      artist = new Artist( "Prince" )
      purpleRain = new Song( "Purple Rain", artist, rock )
    } )

    it( "has a private `_title` property", () => {
      expect( purpleRain._title ).to.equal( "Purple Rain" )
    } )

    it( "has a private `_artist` property that is assigned a Genre instance", () => {
      expect( purpleRain._artist ).to.be.instanceof( Artist )
      expect( purpleRain._artist ).to.equal( artist )
      expect( purpleRain._artist._name ).to.equal( "Prince" )
    } )

    it( "has a private `_genre` property that is assigned a Genre instance", () => {
      expect( purpleRain._genre ).to.be.instanceof( Genre )
      expect( purpleRain._genre ).to.equal( rock )
      expect( purpleRain._genre._name ).to.equal( "Rock" )
    } )

    it( "has a `caption` getter that returns a String with the title and artist name", () => {
      expect( purpleRain.caption ).to.equal( "Purple Rain by Prince" )
    } )

  } )


  describe( "Artist", () => {
    let prince

    before( () => {
      prince = new Artist( "Prince" )
    } )

    it( "has a private `_name` property", () => {
      expect( prince._name ).to.equal( "Prince" )
    } )

    it( "has a `name` getter", () => {
      expect( prince.name ).to.equal( "Prince" )
    } )

    it( "has a `name` setter", () => {
      prince.name = "the artist formerly known as Prince"
      expect( prince.name ).to.equal( "the artist formerly known as Prince" )
      expect( prince._name ).to.equal( "the artist formerly known as Prince" )
    } )
  } )

  describe( "Album", () => {
    let rock
    let pop
    let funk
    let newWave
    let artist
    let nineteenNinetyNine
    let littleRedCorvette
    let delirious
    let letsPretendWereMarried
    let album

    before( () => {
      rock = new Genre( "Rock" )
      pop = new Genre( "Pop" )
      funk = new Genre( "Funk" )
      newWave = new Genre( "New Wave" )
      prince = new Artist( "Prince" )

      nineteenNinetyNine = new Song( "1999", prince, funk )
      littleRedCorvette = new Song( "Little Red Corvette", prince, pop )
      delirious = new Song( "Delirious", prince, funk )
      letsPretendWereMarried = new Song( "Let's Pretend We're Married", prince, newWave )

      album = new Album( "1999", prince, [ nineteenNinetyNine, littleRedCorvette, delirious, letsPretendWereMarried ] )
    } )

    it( "has a `trackList` getter that returns the titles of all songs on the album", () => {
      expect( album.trackList ).to.eql( [ "1999", "Little Red Corvette", "Delirious", "Let's Pretend We're Married" ] )
    } )

    it( "has a `genres` getter that returns a list of all song genres on an album with no duplicate genres", () => {
      expect( album.genres ).to.eql( [ funk, pop, newWave ] )
    } )
  } )

  describe( "Artist continued", () => {
    let prince
    let purpleRain
    let takeMeWithU
    let nineteenNinetyNine
    let littleRedCorvette

    before( () => {
      prince = new Artist( "Prince" )
      purpleRain = new Song( "Purple Rain", prince, new Genre( "Rock" ) )
      takeMeWithU = new Song( "Take Me With U", prince, new Genre( "Soul" ) )
      nineteenNinetyNine = new Song( "1999", prince, new Genre( "Funk" ) )
      littleRedCorvette = new Song( "Little Red Corvette", prince, new Genre( "Pop" ) )

      prince.albums = [ ...prince.albums, new Album( "Purple Rain", prince, [ purpleRain, takeMeWithU ] ) ]
      prince.albums = [ ...prince.albums, new Album( "1999", prince, [ nineteenNinetyNine, littleRedCorvette ] ) ]

    } )

    it( "has a `discography` getter that lists the titles of all albums belonging to an artist", () => {
      expect( prince.discography ).to.eql( [ "Purple Rain", "1999" ] )
    } )

    it( "has a `songs` getter that returns an array of all song instances belonging to an artist", () => {
      expect( prince.songs.length ).to.equal( 4 )

      expect( prince.songs ).to.include( purpleRain, takeMeWithU, nineteenNinetyNine, littleRedCorvette )
    } )
  } )

} )