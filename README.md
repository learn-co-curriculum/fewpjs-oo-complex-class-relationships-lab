# Complex Class Relationships Lab

## Learning Goals

- Practice building complex class relationships

## Introduction

In the previous lab, we built classes to represent `Song`, `Artist` and `Genre`.
In this lab, we're going to expand on the previous solution. This time, we will
add _albums_ as well as some additional behaviors for our `Artist` class.

## Instructions

For this application, individual songs will be used to keep track of its artist
and genre, just as before. The new `Album` class will contain _collections_ of
songs. The new `Artist` class will also contain some additional behaviors, but
these should be added last, as they will rely on `Album`.

- The `Genre` class should take in one parameter, `name` and assign it to a
  private property, `_name`. `Genre` should have a getter, `name` that returns
  `_name`.

- The `Artist` class should also take in one parameter, `name`, and assign it
  to a private property, `_name`. `Artist` should have a getter and setter for
  `name` to return or modify `_name`.

- The `Song` class should take in three parameters, a title, an instance of an
  artist, and an instance of a genre. These should be assigned to three private
  properties, `_title`, `_artist`, and `_genre`. `Song` should have a `caption`
  getter that takes the title, artist name and genre name and interpolates them
  into a single sentence.

  ```js
  let queen = new Artist('Queen');
  let popRock = new Genre('Pop Rock');
  let dontStopMeNow = new Song("Don't Stop Me Now", queen, popRock);
  dontStopMeNow.caption;
  // => 'Don't Stop Me Now by Queen (Pop Rock)'
  ```

- The `Album` class should take in a title, an instance of an `Artist`
  and an array of `Song` instances, an assign these to private properties.
  `Album` should have getters for `title`, `songs`, and `artist`.

  - Write a `trackList` getter that returns an array of the album's song
    titles.
  - Write a `genres` getter that returns an array of _genres_ from the
    album's list of songs. All array elements should be unique (no repeating
    genres).

## Expanding Artist

Once you have all tests passing for the `Album` class, let's add a few more
features to `Artist`:

- Add a private property, `_albums`, that starts as an empty array.
- Create a getter and setter for `albums` that will either return an array
  of `Album` instances, or take in an array of `Album`s and assign it to the
  `_albums` property.
- Create a `discography` getter that returns the **title** of each album
  belonging to an artist
- Create a `songs` getter that returns an array of _all_ `Song` instances from
  all albums belonging to an artist

## Conclusion

With Object Orientation, we can build complex dependencies. These dependencies
may rely on classes one or two degrees removed (as we see getting songs for
an artist _through_ albums). Dependencies can also be bi-directional - an
`Album` can have an artist and an `Artist` can have albums.

It is important to understand how to create these complex dependencies, but in
general, it is recommended that you only create dependencies you absolutely
need. The more complex your dependencies, the less flexible your classes will
get (and therefor, the harder to change and maintain later on).

As we build more complex dependencies, we also need to make sure our data
is kept consistent. In this case, albums have an artist and artists have many
albums, but we needed to add additional code to make sure both are updated
when an album is created.
