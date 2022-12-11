export function addHeader(root) {
  const newHead = document.createElement("header");
  const newHeaderOne = document.createElement("h1");
  newHeaderOne.textContent = "Quiz App";

  root.append(newHead);
  newHead.append(newHeaderOne);
}
