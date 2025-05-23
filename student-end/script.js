document.addEventListener('DOMContentLoaded', () => {
  const input = document.getElementById('grpNumInput');
  const nextButton = document.getElementById('next');

  input.addEventListener('input', () => {
    const val = input.value.trim();
    if (/^\d$/.test(val)) {
      nextButton.classList.remove('hidden');
    } else {
      nextButton.classList.add('hidden');
    }
  });

  nextButton.addEventListener('click', () => {
    nextButton.addEventListener('click', () => {
    const group = input.value.trim();
    window.location.href = `image.html?group=${group}`;
});

  });
});