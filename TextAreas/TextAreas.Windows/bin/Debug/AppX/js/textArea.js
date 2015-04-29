(function () {
    'use strict';
    var goBtn, textArea, output;

    function getContent() {
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