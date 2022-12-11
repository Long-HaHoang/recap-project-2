export function addFooter(root) {
  const newFooter = document.createElement("footer");
  newFooter.innerHTML = `
<nav>
        <ul class="navigation">
          <li class="navigation__item" data-js="navItem">
            <a href="#"
              ><button class="btn btn__nav">
                <img
                  src="./asset/icons/home_FILL0_wght400_GRAD0_opsz48.png"
                  alt="home"
                />
                Home
              </button></a
            >
          </li>
          <li class="navigation__item" data-js="navItem">
            <a href="./html/bookmark.html"
              ><button class="btn btn__nav">
                <img
                  src="./asset/icons/bookmarks_FILL0_wght400_GRAD0_opsz48.png"
                  alt="bookmark"
                />
                Bookmark
              </button></a
            >
          </li>
          <li class="navigation__item" data-js="navItem">
            <a href="./html/form.html"
              ><button class="btn btn__nav">
                <img
                  src="./asset/icons/add_circle_FILL0_wght400_GRAD0_opsz48.png"
                  alt="addCard"
                />
                Add Card
              </button></a
            >
          </li>
          <li class="navigation__item" data-js="navItem">
            <a href="./html/profile.html"
              ><button class="btn btn__nav">
                <img
                  src="./asset/icons/person_FILL0_wght400_GRAD0_opsz48.png"
                  alt="profile"
                />
                Profile
              </button></a
            >
          </li>
        </ul>
      </nav>
`;

  root.append(newFooter);
}
