function fun(){
    var a=[];
      
      var id=document.getElementById("id").value;
      var name=document.getElementById("name").value;
      var price=document.getElementById("price").value;
      var b={id:id,name:name,price:price};
      
      a.push(b);
    for(var i=0;i<=a.length;i++){
        console.log(a[i]);
        document.getElementById("table_body").innerHTML+="<tr><td>"+a[i].id+"</td><td>"+a[i].name+"</td><td>"+a[i].price+"</td></tr>";
    }
    
  }