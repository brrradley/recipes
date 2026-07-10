function polishNoteText(text) {
  return String(text || '')
    .replace(/^\s*Reviewed:\s*/i, '')
    .replace(/^\s*Useful\s+(check|tweak):\s*/i, '')
    .replace(/^\s*Useful:\s*/i, '')
    .replace(/\bthis makes sense as\b/gi, 'works as')
    .replace(/\bmethod makes sense\b/gi, 'method works')
    .replace(/\bmakes sense\.\s*/gi, '')
    .replace(/\bReviewed\b:?\s*/gi, '')
    .trim()
    .replace(/^./, c => c.toUpperCase());
}

function polishNotes() {
  document.querySelectorAll('.body h3').forEach(heading => {
    if (heading.textContent.trim().toLowerCase() === 'review notes') {
      heading.textContent = 'Notes';
    }
  });

  document.querySelectorAll('.body h3').forEach(heading => {
    if (heading.textContent.trim().toLowerCase() !== 'notes') return;
    const section = heading.closest('section');
    if (!section) return;
    section.querySelectorAll('p, li').forEach(node => {
      node.textContent = polishNoteText(node.textContent);
    });
  });
}

const notesObserver = new MutationObserver(polishNotes);
const list = document.getElementById('list');
if (list) {
  notesObserver.observe(list, { childList: true, subtree: true });
  polishNotes();
}
