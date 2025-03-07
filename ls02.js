let numbers = [2,5,7,4,1,8,6];
let count = +prompt("nhập số bạn đoán: ");

if (numbers.includes(count)) {
    console.log("Bingooo");
}else{
    console.log("Chúc bạn may mắn lần sau");
}