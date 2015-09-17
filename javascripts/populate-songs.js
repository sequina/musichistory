define(function () {
      return  {
        getSongs: function (callBack)  {
          $.ajax({
                 url: "https://caromusichistory.firebaseio.com/.json"
                  }).done(function(data) {
                        callBack(data);
                      });

                }

          };

  });




