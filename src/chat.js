export function init() {
  const root = document.createElement("div")
  root.innerHTML = `<p>There are 10 people in the room.</p>`
  document.body.appendChild(root)
}