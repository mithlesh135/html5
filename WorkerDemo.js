var myWorker = new Worker('worker.js'),
    btn = document.querySelector('input[type=button]'),
    terminateBtn = document.querySelector('input[name=terminate]'),
    closeBtn = document.querySelector('input[type=close]');

function submitForm() {
    myWorker.postMessage(document.querySelector('input[name=range]').value);
}

myWorker.onmessage = function(e) {
    var list = document.getElementsByTagName('ul')[0];
    e.data.forEach(function(item) {
        var el = document.createElement('li');
        el.textContent = item;
        list.appendChild(el);
    });
};

function terminateWorker() {
    myWorker.terminate();
}

function closeWorker() {
    postMessage('closeWorker');
}

if (btn) {
    btn.addEventListener('click', submitForm);
}

if (terminateBtn) {
    terminateBtn.addEventListener('click', terminateWorker);
}

if (closeBtn) {
    closeBtn.addEventListener('click', 'close');
}

Function.prototype.bind = function(ob) {
    var me = this;
    return function() {
        me.call(ob);
    }
}
