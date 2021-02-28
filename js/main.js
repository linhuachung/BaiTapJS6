document.getElementById("btnTinh").addEventListener("click", sum);
document.getElementById("btnTinh2").addEventListener("click", soChiaHetCho3);
document.getElementById("btnTinh3").addEventListener("click", timSoNguyenDuongNhoNhat);
document.getElementById("btnTinh4").addEventListener("click", Sn);
document.getElementById("btnTinh5").addEventListener("click", giaiThuaFunction);
function sum() {
    var tongChan = 0;
    var num = +document.getElementById("inputNumber").value
    for (var i = 2; i <=  num; i+=2) {     
            tongChan += i;       
    }
    document.getElementById("kq").innerHTML = "Tổng chẵn từ 1 -  " + num + " là: " +tongChan;
}

function soChiaHetCho3() {
    var count = 0;
    for (var i = 0; i < 1000; i++) {
        if (i % 3 == 0) {
            count++;

            console.log("Số thứ: " + i);
        }
    }
    document.getElementById("kq2").innerHTML = "Tổng các số chia hết cho 3 từ 0 - 1000: " + count ;
}

function timSoNguyenDuongNhoNhat() {
    var tong = 0;
    var i = 0;
    while (tong < 1000) {
        i++;
        tong = tong + i;
    }
    document.getElementById("kq3").innerHTML ="Số nguyên dương nhỏ nhất: " + i + "<br>" + "Tổng là: " + tong;
}
function Sn(){
    var numX = +document.getElementById("inputX").value;
    var numN = +document.getElementById("inputN").value;  
    var sum = 0;
    var lt = 1
    for (var i = 0 ; i< numN ; i++){
        lt = lt * numX;
        sum += lt;
    }

    document.getElementById("kq4").innerHTML= sum;
}
function giaiThuaFunction() {
    var giaiThua = 1;
    // ???? số nào *0 mà ko = 0 a???
    var num = +document.getElementById("numGT").value;
    for (var i = 1; i <= num; i++){
        giaiThua = giaiThua * i ;
       
    }
    document.getElementById("kq5").innerHTML= "Giai thừa: " + giaiThua;
}
