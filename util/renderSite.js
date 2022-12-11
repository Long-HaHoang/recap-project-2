/* Import all function to render the site */
// Import const
import { root } from "../index.js";
// Import function
import { addHeader } from "../component/header.js";

// Render all
export function render() {
  addHeader(root);
}
