// Nhận số nguyên n từ người dùng
let n = parseInt(prompt("Nhập số nguyên n:"));

// Kiểm tra giá trị của n
while (n < 0) {
  alert("Số n phải là số dương. Vui lòng nhập lại.");
  n = parseInt(prompt("Nhập số nguyên n:"));
}

// Hiển thị thông báo n là số dương
alert("n = " + n + " là số dương.");
