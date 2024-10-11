function perkategori(perkategori) {
  const menuItem = document.querySelectorAll(".menu1");
  menuItem.forEach((item) => {
    item.style.display = "none";
  });

  const selectedperkategori = document.querySelectorAll(`.menu1[data-menu='${perkategori}']`);
  selectedperkategori.forEach((item) => {
    item.style.display = "block";
  });
}

window.onload = function () {
  perkategori("Ayam");
};
