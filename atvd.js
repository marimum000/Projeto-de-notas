function addNote() {
  const input = document.getElementById('escrever');
  const urgencia = document.getElementById('urgencia').value;
  const text = input.value.trim();
  if (!text) return;

  const note = document.createElement('div');
  note.classList.add('note');

  if (urgencia == 'urgente') {
    document.getElementById('urgentes').appendChild(note);
  } else {
    document.getElementById('naoUrgentes').appendChild(note);
  }

  note.innerHTML = `
    <span>${text}</span>
    <button class="remove-btn" onclick="removerNote(this)">✖</button> `;
    input.value = '';
}

function removerNote(btn) {
  btn.parentElement.remove();
}

function limpar() {
  document.getElementById('urgentes').innerHTML = '';
  document.getElementById('naoUrgentes').innerHTML = '';
}
