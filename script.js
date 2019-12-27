(function(w) {
    var speakWord = "Hello";

    var helloSpeaker = {};
    helloSpeaker.speak = function(name) {
        console.log(speakWord + " " + name);
    }

    w.helloSpeaker = helloSpeaker;

})(window);


(function(w) {
    var speakWord = "Good Bye";

    var byeSpeaker = {};
    byeSpeaker.speak = function(name) {
        console.log(speakWord + " " + name);
    }

    w.byeSpeaker = byeSpeaker;

})(window);


(function(w) {
    var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];

    for (var i = 0; i < names.length; i++) {
        var firstLetter = names[i].toLowerCase().charAt(0);

        if (firstLetter == "j") {

            window.byeSpeaker.speak(names[i]);

        } else {

            window.helloSpeaker.speak(names[i]);

        }
    }


})(window);