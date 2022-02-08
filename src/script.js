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
  if (id == "" || name == "" || price == "") {
    alert("please insert all the values");
  } else {
    var b = { id: id, name: name, price: price , };
    a.push(b);
  }

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
        ")'><input type='button' Value='Delete' onclick='del(" +
        a[i].id +
        ")'></td></tr>";
      document.getElementById("id").value = "";
      document.getElementById("name").value = "";
      document.getElementById("price").value = "";
    }
    console.log(a);
    // console.log(temp);
    document.getElementById("table_body").innerHTML = temp;
  }
}
function edit(pid, pname, pprice) {
  document.getElementById("id").value = pid;
  document.getElementById("name").value = pname;
  document.getElementById("price").value = pprice;
  document.getElementById("add").style.display = "none";
  document.getElementById("edit").style.display = "block";

  // display();
  // update(pid, pname, price);
}
function update(pid, pname, pprice) {
  for (var i = 0; i <a.length; i++) {
    if (a[i].id == document.getElementById("id").value) {
      console.log(a[i].name);
      a[i].name = document.getElementById("name").value;
      console.log(a[i].name);
      a[i].price = document.getElementById("price").value;
      console.log(a[i].price);
    }
    
  }
  document.getElementById("add").style.display = "block";
  document.getElementById("edit").style.display = "none";
  display();
    console.log("end for");

  
}
function del(pid) {
  // index1=a.indexOf(pid);
  // console.log(index1);
  arr = [];
  for (var i = 0; i < a.length; i++) {
    if (a[i].id == pid) {
      a.splice(i, 1);
      // delete a[0];
      console.log("element deleted");
      console.log(a.length);
      // console.log(a);
    }
  }
  display();
}
