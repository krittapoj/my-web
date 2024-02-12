
   /* let loop_number = prompt("ใส่เลข");
    console.log(loop_number );
    console.log(Math.floor(Math.random() * 100));
    document.getElementById("result").innerHTML = Math.floor(Math.random() * 100);*/
   /* for(var counter = 0; counter < 5; counter++)
    {
        console.log("hello" + counter)
    }*/

let qrt = prompt("จำนวนรอบในการกด")
let sum = 0
for(var i = 1; i <= qrt; i++)
{
    let item_price = prompt("ร้านสินค้า" + i)
    sum = sum + parseInt(item_price)
    document.getElementById("price-lsit").innerHTML += "รายการสินค้าชิ้นที่" + i + item_price + "บาท" + "<br>"
    document.getElementById("result").innerHTML = "ราคารวม" + sum + "บาท"
}

    