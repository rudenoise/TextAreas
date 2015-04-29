(function () {
    'use strict';
    var goBtn, textArea, output;

    function getContent() {
        var innerHTML;
        // swap line breaks for <br>
        // in real app also needs escaping of tags etc... (is there anything built in?)
        // also in app the area would need to grow to accomodate pasted/typed input without using scroll-bars
        innerHTML = textArea.value.replace(/<[^>]*>/g, '');
        output.innerHTML = innerHTML.replace(/[\r\n]{1,}/g, '<br></br>');
    }

    WinJS.Namespace.define('textArea', {
        setUp: function () {
            var width;
            goBtn = document.getElementById('textAreaGo');
            textArea = document.getElementById('textAreaIn');
            output = document.getElementById('textAreaOut');
            width = textArea.parentElement.clientWidth;
            textArea.style.paddingRight = String(width - 525) + 'px';
            goBtn.addEventListener('pointerdown', getContent, false);
        }
    });
}());