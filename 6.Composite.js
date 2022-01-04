
// const songslist0 = [ 'song1', 'song2', 'song3' , 'song4' ];

// const songslist1 = [ songslist0, 'song2', 'song3' , 'song4' ];

// const songslist2 = [ songslist1, 'song1', 'song2' , 'song3' ];






























class SongComponent {
    add() { }
    displaySongComponent() { }
}

class Song extends SongComponent {

    constructor(name) {
        super();
        this.songName = name;
    }

    displaySongComponent() {
        console.log(this.songName);
    }
}


class SongGroup extends SongComponent {
    constructor(...list) {
        super();
        this.list = list;
    }

    add(item) {
        this.list.push(item);
    }
    displaySongComponent() {
        this.list.forEach(item => {
            //item can be a Song or a SongGroup
            item.displaySongComponent();
        });
    }
}



//main program
const classicSongs = new SongGroup(new Song('classic1'), new Song('classic2'));
const melodySongs = new SongGroup(new Song('melody1'), new Song('melody2'));

const favSongs = new SongGroup(new Song('instrumental1'), classicSongs, melodySongs);
favSongs.displaySongComponent();
