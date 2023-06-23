import Person from "./person.js";

export default class Employee extends Person {
  constructor(id, hoTen, address, email, soNgayLamViec, luongTheoNgay) {
    super(id, hoTen, address, email);
    this.soNgayLamViec = soNgayLamViec;
    this.luongTheoNgay = luongTheoNgay;
    this.luong = 0;
  }
  tinhLuong() {
    this.luong = Number(this.soNgayLamViec * this.luongTheoNgay);
  }
}
