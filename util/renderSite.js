/* Import all function to render the site */
// Import const
import { root } from "../index.js";
// Import function
import { addHeader } from "../component/header.js";
import { addFooter } from "../component/footer.js";
import { card } from "../component/card.js";

// Render all
export function render() {
  addHeader(root);
  addFooter(root);
  card(root);
}
