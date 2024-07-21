// assets/js/typed-effect.js
document.addEventListener('DOMContentLoaded', function () {
  if (document.getElementById('typed-title')) {
    var titleElement = document.getElementById('typed-title');
    var titleText = titleElement.getAttribute('data-title');

    var titleOptions = {
      strings: [titleText],
      typeSpeed: 100,
      onComplete: function() {
        // Start typing the excerpt once the title is complete
        if (document.getElementById('typed-excerpt')) {
          var excerptElement = document.getElementById('typed-excerpt');
          var excerptOptions = {
            strings: [
              "Who gets to code in DH?",
              "How do DH scholars code?",
              "What are DH coding communities?",
              "From questions to data: a project exploring Digital Humanities on GitHub."
            ],
            typeSpeed: 50,
            backSpeed: 30,
            backDelay: 2000,
            startDelay: 1000,
            smartBackspace: true,
            showCursor: true,
            cursorChar: '|',
            loop: false,
            onStringTyped: function(pos, self) {
              if (pos === 3) {
                self.stop(); // Stop typing after the final message
              }
            }
          };

          new Typed('#typed-excerpt', excerptOptions);
        }
      }
    };

    new Typed('#typed-title', titleOptions);
  }
});