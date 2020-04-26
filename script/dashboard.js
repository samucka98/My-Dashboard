// ELEMENTOS DA TELA
let view = document.getElementsByClassName('view')[0];
let commands = document.getElementsByClassName('commands')[0];

function showView() {
  view.style.left = "10%";
  view.style.transition = '.1s';
  commands.style.backgroundColor = "#f6f6f6";
  commands.style.transition = '.1s';
}

function hiddenView() {
  view.style.left = "75%";
  view.style.transition = '.5s';
  commands.style.backgroundColor = "#1e1e22";
  commands.style.transition = '.5s';
}

/**
 * Adicionar um botão para sair e ir para o site.
 */

// Botões do painel
let btnHome = document.getElementById('btnHome');
btnHome.addEventListener('click', function() {

  if (view.style.left === "75%") {
    showView();
  } else {
    hiddenView();
  }
});

let btnCalendario = document.getElementById('btnCalendar');
btnCalendario.addEventListener('click', function() {
  if (view.style.left === "75%") {
    showView();
  } else {
    hiddenView();
  }
});

let btnMensagens = document.getElementById('btnEnvelope');
btnMensagens.addEventListener('click', function() {
  if (view.style.left === "75%") {
    showView();
  } else {
    hiddenView();
  }
});

let btnUsuario = document.getElementById('btnUser');
btnUsuario.addEventListener('click', function() {
  if (view.style.left === "75%") {
    showView();
  } else {
    hiddenView();
  }
});

let btnConfig = document.getElementById('btnCog');
btnConfig.addEventListener('click', function() {
  if (view.style.left === "75%") {
    showView();
  } else {
    hiddenView();
  }
});


// Botões da view
let btnBack = document.getElementById('back');
btnBack.addEventListener('click', function() {
  hiddenView();
});