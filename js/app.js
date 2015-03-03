$( "#artists" ).on( "click", function( event ) {
    $("#list").empty()
    artists.load()
})

$( "#albums" ).on( "click", function( event ) {
    $("#list").empty()
    albums.load()
})

$("#tracks").on("click", function(event) {
    $("#list").empty()
    tracks.load()
})

