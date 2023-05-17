    var allProducts = document.querySelectorAll(".list  li")
    var content = document.querySelector("#content")
    var btn = document.querySelector("#btn1")
    var price = document.querySelector("#price")
    var totalprice = 0

allProducts.forEach(function (item) {
    item.onclick = function () {
        totalprice += Number(item.getAttribute("price"))

                btn.style.display = "block"
                btn.style.color = "white"
                btn.style.backgroundColor = "#0077b6"
                btn.style.width = "200px"
                btn.style.height="45px"

        }
})

btn.onclick = function () {
    document.getElementById('price').innerHTML = "Total Price =" + totalprice;
}
