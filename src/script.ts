const $sections: HTMLElement[] = [];
document.querySelectorAll(`.nav`).forEach(($nav: HTMLAnchorElement) => {
  const id = $nav.href.slice($nav.href.indexOf(`#`) + 1, $nav.href.length);
  $sections.push(document.getElementById(id));
});
const offsets = $sections.map((e) => e.offsetTop);

window.onscroll = () => {
  const scrollPostion = window.pageYOffset;
  const index = offsets.findIndex((v) => v > scrollPostion);

  document.querySelectorAll(`.nav`).forEach(($nav) => {
    $nav.classList.remove(`active`);
  });
  const $section = $sections[index];
  if ($section) {
    document.getElementById(`nav-${$section.id}`).classList.add("active");
  }
};
