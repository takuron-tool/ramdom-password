$("#e-alert").hide();
$("#s-alert").hide();

function generate() {
  var v1 = $("#checkvalue-1").prop("checked");
  var v2 = $("#checkvalue-2").prop("checked");
  var v3 = $("#checkvalue-3").prop("checked");
  var v4 = $("#checkvalue-4").prop("checked");

  var size = Number($("#password-size").val());

  var chars = new Array();

  if (!v1 && !v2 && !v3 && !v4) {
    $("#e-alert").show();
    $("#s-alert").hide();
    $("#e-alert").text("错误！不能取消所有类型字符！");
  } else if (size < 1) {
    $("#e-alert").show();
    $("#s-alert").hide();
    $("#e-alert").text("错误！长度非法！");
  } else if (size > 99) {
    $("#e-alert").show();
    $("#s-alert").hide();
    $("#e-alert").text("错误！长度过长！");
  } else {
    $("#e-alert").hide();
    $("#s-alert").hide();
    if (v1) {
      chars.push("1", "2", "3", "4", "5", "6", "7", "8", "9", "0");
    }
    if (v2) {
      chars.push("A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z");
    }
    if (v3) {
      chars.push("a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z");
    }
    if (v4) {
      chars.push("!", "@", "#", "%", "^", "&", "*");
    }

    var password = "";

    for (var i = 0; i < size; i++) {
      var a = chars.length;
      var key = Math.floor(Math.random() * a);
      password = password + chars[key];
    }

    $("#password").val(password);
  }


}

function copy() {
  copyToClip($("#password").val());
  $("#e-alert").hide();
  $("#s-alert").show();
}


function copyToClip(content) {
  var aux = document.createElement("input");
  aux.setAttribute("value", content);
  document.body.appendChild(aux);
  aux.select();
  document.execCommand("copy");
  document.body.removeChild(aux);
}
