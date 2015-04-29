(function () {
    'use strict';
    var goBtn, textArea, output;

    function getContent() {
        // swap line breaks for <br>
        // in real app also needs escaping of tags etc... (is there anything built in?)
        // also in app the area would need to grow to accomodate pasted/typed input without using scroll-bars
        output.innerHTML = textArea.value.replace(/[\r\n]{1,}/g, '<br></br>');
    }

    WinJS.Namespace.define('textArea', {
        setUp: function () {
            goBtn = document.getElementById('textAreaGo');
            textArea = document.getElementById('textAreaIn');
            output = document.getElementById('textAreaOut');

            goBtn.addEventListener('pointerdown', getContent, false);
        }
    });
}());