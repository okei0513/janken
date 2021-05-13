var PointCom = 0, PointMe = 0;
$("#gu_btn_output").hide();
$("#cho_btn_output").hide();
$("#pa_btn_output").hide();
/*
function dclr() {
    PointCom = PointMe = 0;
}
*/

//相手の手と結果
$("#gu_btn").on("click", function () {
    $("#gu_btn_output").hide();
    $("#cho_btn_output").hide();
    $("#pa_btn_output").hide();
    const randomNumber = Math.floor(Math.random() * 3);
    if (randomNumber === 0) {
        //     $("#com_hand").text("グー");
        $("#result").text("あいこ");
        $("#gu_btn_output").show();
        PointMe = PointMe;
        PointCom = PointCom;
    } else if (randomNumber === 1) {
        //    $("#com_hand").text("チョキ");
        $("#result").text("あなたの勝ち");
        $("#cho_btn_output").show();
        //       PointMe++;
        PointMe = PointMe + 1;
        if (PointCom <= 0) {
            PointCom = PointCom;
        } else {
            PointCom = PointCom - 1
        }
    } else if (randomNumber === 2) {
        //    $("#com_hand").text("パー");
        $("#result").text("あなたの負け");
        $("#pa_btn_output").show();
        //PointCom++;
        PointCom = PointCom + 1;
        if (PointMe <= 0) {
            PointMe = PointMe;
        } else {
            PointMe = PointMe - 1
        }
    } else {
        alert("error");
    }
    $("#myScore").text(PointMe);
    $("#yourScore").text(PointCom);
});

$("#cho_btn").on("click", function () {
    $("#gu_btn_output").hide();
    $("#cho_btn_output").hide();
    $("#pa_btn_output").hide();
    const randomNumber = Math.floor(Math.random() * 3);
    if (randomNumber === 0) {
        //    $("#com_hand").text("グー");
        $("#result").text("あなたの負け");
        $("#gu_btn_output").show();
        PointCom++;
    } else if (randomNumber === 1) {
        //    $("#com_hand").innerHTML = "<img src='CSS/68e9a0182bfd7b233b60ff2cbcef8b78_t.jpeg’>";
        $("#result").text("あいこ");
        $("#cho_btn_output").show();
    } else if (randomNumber === 2) {
        //    $("#com_hand").innerHTML = "<img src ='CSS/0ee5a6033fde37adb9b63286751deed6_t.jpeg'>";
        $("#result").text("あなたの勝ち");
        $("#pa_btn_output").show();
        PointMe++;
    } else {
        alert("error");
    }
});
$("#pa_btn").on("click", function () {
    $("#gu_btn_output").hide();
    $("#cho_btn_output").hide();
    $("#pa_btn_output").hide();
    const randomNumber = Math.floor(Math.random() * 3);
    if (randomNumber === 0) {
        //    $("#com_hand").text("グー");
        $("#result").text("あなたの勝ち");
        $("#gu_btn_output").show();
        PointMe++;
    } else if (randomNumber === 1) {
        //    $("#com_hand").innerHTML = "<img src='CSS/68e9a0182bfd7b233b60ff2cbcef8b78_t.jpeg'>";
        $("#result").text("あなたの負け");
        $("#cho_btn_output").show();
        PointCom++;
    } else if (randomNumber === 2) {
        //    $("#com_hand").innerHTML = "<img src ='CSS/0ee5a6033fde37adb9b63286751deed6_t.jpeg;'>";
        $("#result").text("あいこ");
        $("#pa_btn_output").show();
    } else {
        alert("error");
    }

    function display_points() {
        Point01.innerText = PointCom;
        Point02.innerText = PointMe;
    }
});
