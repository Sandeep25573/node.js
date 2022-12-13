function qplus(r) {
    var qtyid = document.getElementById("itemqty" + r)
    qtyid.value++;
}

function qminus(r) {
    var qtyid = document.getElementById("itemqty" + r)
    if (qtyid.value > 1) {
        qtyid.value--;
    }
}

function addtocart(i) {
    var qtyid = document.getElementById("itemqty" + i)
    alert(qtyid.value + " item added to cart!")
}


function cartfunc(c) {
    var i = c.parentNode.parentNode.rowIndex;
    document.getElementById("cartTable").deleteRow(i);

}