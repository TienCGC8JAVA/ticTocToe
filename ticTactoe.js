
let board = [];
let data = "";

for (let i = 0; i < 20; i++)
{
    board[i] = [".",".",".",".",".",".",".",".",".","."];
}
for (let i = 0; i < 10 ; i++)
{
    data += "<br>";
    for (let j = 0; j < 10; j++)
    {
        data += board[i][j] + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp";
    }
}

document.getElementById("caroGame").innerHTML = data;

function play1()
{
    let positionX = prompt("Nhập tọa độ hàng:");
    let positionY = prompt("Nhập tọa độ cột:");
    data = "";
    board[positionX][positionY] = "X";
    for (let i = 0; i < 10; i++)
    {
        data +="<br>";
        for (let j = 0; j < 10; j++)
        {
            data += board[i][j] + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp"
        }
    }
    document.getElementById("caroGame").innerHTML = "<hr>" + data;

}

function play2() {
    let positionX = prompt("Nhập tọa độ hàng:");
    let positionY = prompt("Nhập tọa độ cột:");
    data = "";
    board[positionX][positionY] = "O";
    for (let i = 0; i < 10; i++) {
        data += "<br>";
        for (let j = 0; j < 10; j++) {
            data += board[i][j] + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp"
        }
    }
    document.getElementById("caroGame").innerHTML = "<hr>" + data;

}

