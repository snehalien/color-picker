document.addEventListener('DOMContentLoaded', () => {
  const colorInput = document.getElementById('color-input');
  const colorValue = document.getElementById('color-value');

  colorInput.addEventListener('input', () => {
    colorValue.textContent = colorInput.value;
  });
});
