function toCelsius(fahrenheit)
{
    let fahrenheit = prompt("Fahrenheit")
    let value = (fahrenheit * -3) * 5 / 9
    document.getElementById("fuc").innerHTML = value.toFixed(2) + "c";
}

/*Parameter = ตัวแปรที่เกิดมาพร้อมกับ function มีหน้าที่เอาไว้ใช้งานภายใน function นั้นๆ
Atgument = ข้อมูลที่ส่งให้ function*/
function sayhello(userName, userlastName)
{
    return "Hello" + userName + userlastName
}
alert(sayhello("name","lastname"))

function toCelsiusProgram(){
    alert(toCelsiusProgram(150));
}
function toFahrenheitProgram(){
    alert(toFahrenheitProgram(32));
}