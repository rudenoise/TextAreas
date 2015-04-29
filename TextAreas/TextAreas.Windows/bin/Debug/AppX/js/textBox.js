(function () {
    'use strict';
    var textBox, btn, out, savedRange;

    function getContent() {
        var innerHTML = toStaticHTML(textBox.innerHTML)
            .replace(/(\<|\<\/)div\>/g, '')
            .replace(/\<br\>/g, '<br></br>');
        out.innerHTML = innerHTML;
    }

    WinJS.Namespace.define('textBox', {
        setUp: function () {
            textBox = document.getElementById('textBoxIn');
            btn = document.getElementById('textBoxGo');
            out = document.getElementById('textBoxOut');

            textBox.onbeforepaste = function () {
                savedRange = window.getSelection().getRangeAt(0);

            };
            textBox.onpaste = function (e) {
                console.log('paste');
                e.preventDefault();
                e.returnValue = false;
                var dataPackageView = Windows.ApplicationModel.DataTransfer.Clipboard.getContent();
                if (dataPackageView.contains(Windows.ApplicationModel.DataTransfer.StandardDataFormats.text)) {
                    dataPackageView.getTextAsync().done(function (text) {
                        //var caretPos = getCaretPosition(ti);
                        //textBox.innerText = textBox.innerText.slice(0, caretPos) + text + ti.innerText.slice(caretPos);
                        //var caretPos = getCaretPosition();
                        console.log(savedRange);
                        var first = textBox.innerHTML.slice(0, savedRange.startOffset);
                        first = first.replace(/\<br\>/g, '\n');
                        first = first.replace(/\&nbsp;/g, ' ');
                        var last = textBox.innerHTML.slice(savedRange.endOffset);
                        last = last.replace(/\<br\>/g, '\n');
                        last = last.replace(/\&nbsp\;/g, ' ');
                        textBox.innerText = first + text + last;

                    }, function (e) {
                        console.error('paste error', e);
                    });
                }
            };

            btn.addEventListener('pointerdown', getContent, false);
        }
    });
}());