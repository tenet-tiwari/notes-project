let notes = [];

function addNote() {
  const noteInput = document.getElementById('new-note');
  const noteText = noteInput.value.trim();
  
  if (noteText.length === 0) {
    alert('Please enter a note!');
    return;
  }
  
  notes.push(noteText);
  noteInput.value = '';
  
  renderNotes();
}

function renderNotes() {
  const notesList = document.getElementById('notes-list');
  notesList.innerHTML = '';
  
  for (let i = 0; i < notes.length; i++) {
    const note = notes[i];
    const li = document.createElement('li');
    li.innerText = note;
    notesList.appendChild(li);
  }
}
