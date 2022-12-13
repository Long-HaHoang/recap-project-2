/* Import all function to render the site */
// Import const
import { root } from "../index.js";
// Import function
import { addHeader } from "../component/header/header.js";
import { addFooter } from "../component/footer/footer.js";
import { card } from "../component/card/card.js";

// Render all
export function render() {
  addHeader(root);
  addFooter(root);
  card(root);
}
