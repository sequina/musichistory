define(["lodash"]), function(_) {
  return function (allSongs) {
  var uniqueArtist = _.chain(data)
                                .uniq("artist")
  return {
    uniqueArtist: uniqueArtist
  }


  }
}
