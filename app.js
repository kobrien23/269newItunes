function ItunesController() {
    var itunesService = new ItunesService()
    //Do Not Modify the getMusic function
    this.getMusic = function getMusic(e) {
        e.preventDefault();
        var artist = e.target.artist.value;
        itunesService.getMusicByArtist(artist).then(drawSongs);
    }

    function drawSongs(songList) {
        console.log(songList);
        // This is where you task begins


        // might use this to update the screen... when if figure out what to send there!

        var songElem = document.getElementById('song-list')

        var template = ''
        console.log('Are we here? line 19')
        // var songArray = []
        for (i = 0; i < songList.length; i++) {   // = to line 6 in docefoo 1771
            var song = songList[i]
            template += `<div class ="background song-format ">


              

                    <div class = "img-container">
                        <img src="${song.albumArt}" />
                    </div>
               
                    <h6>${song.artist}</h6>
                    <h6>${song.title}</h6>
                    <h6>${song.collection}</h6>
                    <h6>${song.price}</h6>
                        <div class="row a-format">
                          <div class="col-md-3">
                            <audio controls preload="none">
                            <source src="${song.preview}">
                            </audio>
                          </div>
                        </div>
                  </div>
         `







            // template += '<tr><td>' + song.title + '</td></tr>'
            // template += '<tr><td>' + song.artist + '</td></tr>'
            // template += '<tr><td>' + song.albumArt + '</td></tr>'
            // template += '<tr><td>' + song.collection + '</td></tr>'
            // template += '<tr><td>' + song.price + '</td></tr>'
            // template += '<tr><td>' + song.preview + '</td></tr>'
            console.log(i, ' its working!!!')
        }
        songElem.innerHTML = template
    }
}

var itunesCtrl = new ItunesController()

