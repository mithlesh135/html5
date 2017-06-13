var targets,
  sources;

function attachListeners() {
  targets = document.querySelectorAll('div[data-role=target]');
  sources = document.querySelectorAll('div[data-role=source]');

  Array.prototype.forEach.call(targets, function (target) {
    target.addEventListener('dragenter', cancel);
    target.addEventListener('dragover', dragOver);
    target.addEventListener('drop', drop);
    target.addEventListener('drag', drag);
  });

  Array.prototype.forEach.call(sources, function (source) {
    source.addEventListener('dragstart', dragStart);
    source.addEventListener('drag', drag);
    source.addEventListener('dragend', dragEnd);
  });
}

function dragStart(event) {
  event.dataTransfer.setData('text/plain', event.target.className);
  //event.dataTransfer.effectAllowed = "link";
}

function drag(event) {
  cancel(event);
}

function dragEnd(event) {
  cancel(event);
}

function cancel(e) {
  e.stopPropagation();
  e.preventDefault();
}

function dragOver(e) {
  cancel(e);
  //e.dataTransfer.dropEffect = "link";
}

function drop(e) {
  cancel(e);
  var el = e.dataTransfer.getData('text/plain');
  if (el) {
    e.target.appendChild(document.querySelector('.' + el));
  }
  reportData(e.dataTransfer, e.target);
}

function reportData(pDataTransafer, target) {
debugger
  Array.prototype.forEach.call(pDataTransafer.types, function (type) {
    var d = document.createElement('div');
    d.setAttribute('draggable', true);
    d.setAttribute('data-role', 'source');
    d.className = "chek_drag";

    if (type === 'Files') {
      Array.prototype.forEach.call(pDataTransafer.files, function (file) {
        for (var i in file) {
          d.innerHTML += '<span>' +
            i + ' : ' + '</span>' +
            '<span>' +
            file[i] +
            '</span>' +
            '<br>';
        }
      });
    } else {
      d.innerHTML = '<span>Type : </span>' +
        '<span>' + type + '</span>' +
        '<br>' +
        '<span>' + 'Data :' + '</span>' +
        '<span>' + pDataTransafer.getData(type) + '</span>';
    }
    target.appendChild(d);
    attachListeners();
  });
}

attachListeners();