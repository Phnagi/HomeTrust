let btn = document.querySelector(".btn");
let myform = document.querySelector(".myform");

btn.addEventListener("submit", () => {
  btn.preventDefault();
});
btn.addEventListener("click", () => {
  myform.submit();
});

function GoForm() {
  //這裡要對應到自己的 javascript 名稱
  //宣告欄位
  var field1 = $("[name='name']").val();
  var field2 = $("[name='tel']").val();
  var field3 = $("[name='email']").val();
  var field4 = $("[name='address']").val();
  var field5 = $("[name='date']").val();
  var field6 = $("[name='textArea']").val();

  $.ajax({
    url: "https://docs.google.com/forms/u/0/d/e/1FAIpQLSe2FdiC0h9HPvJg2wQSeX21T3UJ0o2GUo1Es-WTOcvxAl0Tig/formResponse", //Google Form 裡面的 form action 網址 ＊＊記得要填＊＊
    data: {
      //Google Form 裡面的欄位 name ＊＊記得要改＊＊
      "entry.1074274066": field1,
      "entry.1801855336": field2,
      "entry.1430947487": field3,
      "entry.2106541604": field4,
      "entry.1937349210": field5,
      "entry.1058260639": field6,
    },
    type: "POST",
    dataType: "xml",
    statusCode: {
      0: function () {
        alert("並未收到表單，請麻煩檢查是否輸入正確資料"); //完成送出表單的警告視窗
      },
      200: function () {
        alert("已送出!"); //完成送出表單的警告視窗
      },
    },
  });
}
