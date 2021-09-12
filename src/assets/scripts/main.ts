import { TopPage } from "./components/top/TopPage";

const components = [{ selector: ".js-tp", component: TopPage }];

components.forEach((c) => {
  const targets = document.querySelectorAll(c.selector);

  if (targets.length > 0) {
    targets.forEach((t) => {
      new c.component(t);
    });
  }
});
