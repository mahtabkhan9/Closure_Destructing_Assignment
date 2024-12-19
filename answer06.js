function createPlaylist(name) {
    let songs = []; // Private variable for storing songs

    return {
        addSong: function (title, artist) {
            songs.push({ title, artist });
        },
        listSongs: function () {
            console.log(`${name} Playlist:`);
            songs.forEach((song) => {
                console.log(`${song.title} by ${song.artist}`);
            });
        },
    };
}

const myPlaylist = createPlaylist("My Favorites");

myPlaylist.addSong("Song1", "Artist1");
myPlaylist.addSong("Song2", "Artist2");
myPlaylist.addSong("Song3", "Artist3");

myPlaylist.listSongs();

// Output:
// My Favorites Playlist:
// Song1 by Artist1
// Song2 by Artist2
// Song3 by Artist3
