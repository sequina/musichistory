require.config({
  baseUrl: './javascripts',
  paths:{
    "jquery": "../lib/bower_components/jquery/dist/jquery.min",
    'bootstrap': '../lib/bower_components/bootstrap/dist/js/bootstrap.min',
    'hbs' : '../lib/bower_components/require-handlebars-plugin/hbs',
    'lodash' : '../lib/bower_components/lodash/lodash.min',
    'firebase': '../bower_components/firebase/firebase'
},
  shim: {
    'bootstrap': ['jquery'],
    'material': ['bootstrap'],
    'firebase': {
        exports: 'Firebase'
    }
  }
});

require(["bootstrap", "main"], function() { })
