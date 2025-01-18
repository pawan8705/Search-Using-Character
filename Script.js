let search = () => {
  let searchBox = document.getElementById("search-item").value.toUpperCase();
  let storeItems = document.getElementById("product-list");
  let product = document.querySelectorAll(".product");
  let pname = document.getElementsByTagName("h2");

  for (var i = 0; i < pname.length; i++) {
    let match = product[i].getElementsByTagName("h2")[0];

    if (match) {
      let textValue = match.textContent || match.innerHTML;

      if (textValue.toUpperCase().indexOf(searchBox) > -1) {
        product[i].style.display = "";
      } else {
        product[i].style.display = "none";
      }
    }
  }
}