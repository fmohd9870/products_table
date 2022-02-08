var a = [];
function check() {
  var arr = [];
  if (a.length == 0) {
    fun();
  } else {
    for (var j = 0; j < a.length; j++) {
      // if(a[j].id==document.getElementById("id").value){

      arr += a[j].id;
    }
    if (arr.includes(document.getElementById("id").value)) {
      alert("please insert unique value");
    } else {
      fun();
      console.log("function stop");
    }
  }
}

function fun() {
  var id = document.getElementById("id").value;
  var name = document.getElementById("name").value;
  var price = document.getElementById("price").value;
  var b = { id: id, name: name, price: price };
  a.push(b);

  // document.getElementById("table_body").innerHTML="";
  display();
}

function display() {
  var temp = "";
  for (var i = 0; i <= a.length; i++) {
    console.log(a[i]);
    console.log(a.length);
    if (a.length !== 0) {
      temp +=
        "<tr><td>" +
        a[i].id +
        "</td><td>" +
        a[i].name +
        "</td><td>" +
        a[i].price +
        "</td><td><input type='button' Value='Edit' onclick='edit(" +
        a[i].id +
        ',"' +
        a[i].name +
        '",' +
        a[i].price +
        ")'><input type='button' Value='Delete' onclick='delete()'></td></tr>";
      document.getElementById("id").value = "";
      document.getElementById("name").value = "";
      document.getElementById("price").value = "";
    }
    document.getElementById("table_body").innerHTML = temp;
  }
}
function edit(pid, pname, pprice) {
  document.getElementById("id").value = pid;
  document.getElementById("name").value = pname;
  document.getElementById("price").value = pprice;
  document.getElementById("add").style.display = "none";
  document.getElementById("edit").style.display = "block";
}
