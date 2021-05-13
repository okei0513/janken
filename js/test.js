var PointCom = 0, PointMe = 0;

function dclr() {
    PointCom = PointMe = 0;
}

//相手の手と結果
$("#gu_btn").on("click", function () {
    const randomNumber = Math.floor(Math.random() * 3);
    if (randomNumber === 0) {
        $("#com_hand").text(グー);
        $("#result").text("あいこ");
    } else if (randomNumber === 1) {
        $("#com_hand").
            $("#result").text("あなたの勝ち");
        PointMe++;
    } else if (randomNumber === 2) {
        $("#com_hand").innerHTML = "<img src ='CSS/0ee5a6033fde37adb9b63286751deed6_t.jpeg;'>";
        $("#result").text("あなたの負け");
        PointCom++;
    } else {
        alert("error");
    }
});

$("#cho_btn").on("click", function () {
    const randomNumber = Math.floor(Math.random() * 3);
    if (randomNumber === 0) {
        $("#com_hand").text(グー);
        $("#result").text("あなたの負け");
        PointCom++;
    } else if (randomNumber === 1) {
        $("#com_hand").innerHTML = "<img src='CSS/68e9a0182bfd7b233b60ff2cbcef8b78_t.jpeg’>";
        $("#result").text("あいこ");
    } else if (randomNumber === 2) {
        $("#com_hand").innerHTML = "<img src ='CSS/0ee5a6033fde37adb9b63286751deed6_t.jpeg'>";
        $("#result").text("あなたの勝ち");
        PointMe++;
    } else {
        alert("error");
    }
});
$("#pa_btn").on("click", function () {
    const randomNumber = Math.floor(Math.random() * 3);
    if (randomNumber === 0) {
        $("#com_hand").text(グー);
        $("#result").text("あなたの勝ち");
        PointMe++;
    } else if (randomNumber === 1) {
        $("#com_hand").innerHTML = "<img src='CSS/68e9a0182bfd7b233b60ff2cbcef8b78_t.jpeg'>";
        $("#result").text("あなたの負け");
        PointCom++;
    } else if (randomNumber === 2) {
        $("#com_hand").innerHTML = "<img src ='CSS/0ee5a6033fde37adb9b63286751deed6_t.jpeg;'>";
        $("#result").text("あいこ");
    } else {
        alert("error");
    }

    function display_points() {
        Point01.innerText = PointCom;
        Point02.innerText = PointMe;
    }
});
