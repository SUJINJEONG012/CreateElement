function getValue() {
    let el = document.createElement("li");
    let arrayList = document.getElementById("itemName").value;

    console.log(arrayList);
    document.getElementById("getList").appendChild(el).innerText = arrayList;

}

