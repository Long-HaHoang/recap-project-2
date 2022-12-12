export function card(root) {
  const main = document.createElement("main");

  main.innerHTML = `
    <section class="qcard">
        <h2 class="qcard__quest">Lorem ipsum dolor sit amet consectetur?</h2>
        <button
          type="button"
          class="btn__small bookmark"
          data-js="bookmarked"
          data-status="inactive"
        ></button>
        <div class="qcard__button--container">
          <button
            type="button"
            class="btn"
            data-js="buttonAnswer"
            data-status="inactive"
          >
            Show Answer
          </button>
        </div>
        <p class="qcard__answer" data-js="answerText" hidden>Lorem, ipsum dolor.</p>
        <ul class="qcard__tag">
          <li class="qcard__li">#html</li>
          <li class="qcard__li">#flexbox</li>
          <li class="qcard__li">#css</li>
        </ul>
      </section>
      <section class="qcard">
        <h2 class="qcard__quest">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium
          quam labore consequuntur?
        </h2>
        <button
          type="button"
          class="btn__small bookmark"
          data-js="bookmarked"
          data-status="inactive"
        ></button>
        <div class="qcard__button--container">
          <button
            type="button"
            class="btn"
            data-js="buttonAnswer"
            data-status="inactive"
          >
            Show Answer
          </button>
        </div>
        <p class="qcard__answer" data-js="answerText" hidden>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam earum
          minima sit similique, voluptatem atque velit voluptatibus nisi
          praesentium dolores!
        </p>
        <ul class="qcard__tag">
          <li class="qcard__li">#html</li>
          <li class="qcard__li">#flexbox</li>
          <li class="qcard__li">#css</li>
        </ul>
      </section>
    `;

  root.append(main);
}
