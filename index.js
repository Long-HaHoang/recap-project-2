console.clear();
/** Import all functions and elements */
import { render } from "./util/renderSite.js";

/** Exporting root to append all elements
 * select root here, so your don't need to link another .js to index.html
 */
export const root = document.querySelector('[data-js="root"]');

/** Function call to render the site */
render();
