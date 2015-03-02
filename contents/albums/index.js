var album = {

    searchByAlbum: function(zipcode) {

        // search legistalors by zipcode (default to Boulder, 80301)
        // ref: https://sunlightlabs.github.io/congress/legislators.html

        var zipcode = zipcode || '80301'

        $.get("https://congress.api.sunlightfoundation.com/legislators/locate?zip=" + zipcode, apikey, function(data) {

            console.log('got ' + data)
            if (data.results){

                $.get("/sunlight/legislators/list.jade", function(template) {
                    var html = jade.render(template, {
                        data: data
                    })
                    console.log(html)
                    $("#list").html(html)
                })

            }

        })

    },

    load: function() {

        $.get("/cat-spotify/albums/ui.jade", function(template) {
            var html = jade.render(template)
            $("#ui").html(html)
        })

        // default search results
        album.searchByAlbum('Babel')

    }

}