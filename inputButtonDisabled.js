export function inputButtonDisabled(input, button) {
  button.disabled = true;

  input.addEventListener("input", () => {
    button.disabled = !input.value.length; 
  });
}