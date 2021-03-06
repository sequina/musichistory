<!doctype html>

<html lang="en">
<head>
  <meta charset="utf-8">
  <title>NSS Starter Kit - Handlebars</title>
</head>

<body>

  <div id="entryOutput"></div>

  <script id="entry-template" type="text/x-handlebars-template">
    <div class="entry">
      <h1>{{title}}</h1>
      <div class="body">
        {{body}}
      </div>
    </div>

    <ul>
    {{#each tags}}
      <li>{{category}}:{{name}}</li>
    {{/each}}
    </ul>

    {{> tagline }}
  </script>

  <script id="tagline-partial" type="text/x-handlebars-template">
    <div class="tagline">
      <h4>Authored by {{author_first_name}} {{author_last_name}}</h4>
      <div class="date">{{authored_date}}</div>
    </div>
  </script>

  <script type="text/javascript" src="bower_components/jquery/dist/jquery.min.js"></script>
  <script type="text/javascript" src="bower_components/handlebars/handlebars.min.js"></script>
  <script type="text/javascript" src="javascripts/main.js"></script>

</body>
</html>
