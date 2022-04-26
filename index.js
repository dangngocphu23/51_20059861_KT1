$(document).ready(function(){
    var i = 1;
    $("#myBtn").click(function(){
        $("#myModal").modal();
    });
    function KiemtraHoten(){
        var re = /^[A-Z] {3}\-[A-Z] {3}\-\d{2}\-\d{4}$/;
        if ($("#txtMa").val() == ""){
            $("#tbMa").html("* Bắt buộc nhập");
            return false;
        }
        if (!re.test($("#txtMa").val())){
            $("#tbMa").html("*Lỗi");
            return false;
        }
        $("#tbMa").html("*");
        return true;
    }
    $("#txtMa").blur(KiemtraMa);
    function kiemtraSoAo(){
        var re = /^\d{1,3}$/;
        if ($("#txtSoao").val() == ""){
            $("#tbSoao").html("* Bắt buộc nhập");
            return false;
        }
        
        if (!re.test($("#txtSoao").val())){
            $("#tbSoao").html("*Lỗi");
            return false;
        }
        if (eval($("#txtSoao").val()) > 100){
            $("#tbSoao").html("* Phai nhap so < 100");
            return false;
        }
        $("#tbDiemDen").html("*");
        return true;
    }
    $("#txtSoao").blur(kiemtraSoAo);
    function KiemtraNgay(){
        if ($("#txtNgay").val() == ""){
            $("#tbNgay").html("* Bắt buộc nhập");
            return false;
        }
        var day = new Date($("#txtNgay").val());
        var today = new Date();
        today.setDate(today.getDate()+7);
        if (day > today){
            $("#tbNgay").html("* Ngày tập trung phải sau ngày hiện tại 7 ngày");
            return false;
        }
        $("#tbNgay").html("*");
        return true;
    }
    $("#txtNgay").blur(KiemtraNgay);
    function KTSodienthoai (){
        var re = /^(01\d{9})|(09\d{8})$/;
        var gia = $("#txtSodienthoai").val();
        if (gia == ""){
            $("#tbSodienthoai").html("* Bắt buộc nhập");
            return false;
        }
        if (isNaN(gia)){
            $("#tbSodienthoai").html("* Phai nhap so");
            return false;
        }
        if (!re.test($("#txtSodienthoai").val())){
            $("#tbSodienthoai").html("*Lỗi");
            return false;
        }
        $("#tbSodienthoai").html("*");
        return true;
    }
    $("#txtSodienthoai").blur(KTSodienthoai);
    $("#btnSave").click(function(){
        if (!KiemtraHoten() || !kiemtraSoAo() || !KiemtraNgay() || !KTSodienthoai()){
            $("#thongbao").html("Mời bạn nhập đúng và đầy đủ thông tin");
            return false;
        }
        var matour = $("#txtMa").val();
        var diemden = $("#txtSoao").val();
        var ngaykh = $("#txtNgay").val();
        var tg = $("#txtClb").val();
        var gia = $("#txtGia").val();
        var anh = $("#txtAnh").val().substring(12);
        var them = "<tr><td>" + (i++) + "<td><td>" + matour + "</td><td>" + diemden + "</td><td>" + ngaykh + "</td><td>" + tg + "</td><td>" + gia + "</td><td>" + anh + "</td></tr>"
        $("table tbody").append(them);
        $("#myModal").modal("hide");
        return true;
    })
});