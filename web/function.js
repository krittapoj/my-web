function toCelsius()
{
    let fahrenheit = prompt("Fahrenheit")
    let value = (fahrenheit * -3) * 5 / 9
    document.getElementById("fuc").innerHTML = value.toFixed(2) + "c";
}
toCelsius()

function sayhello()
{
    return "Hello"
}
alert(sayhello())
