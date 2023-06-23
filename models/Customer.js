import Person from "./person.js";

export default class Customer extends Person {
  constructor(id, hoTen, address, email, tenCongTy, triGiaHoaDon, danhGia) {
    super(id, hoTen, address, email);
    this.tenCongTy = tenCongTy;
    this.triGiaHoaDon = triGiaHoaDon;
    this.danhGia = danhGia;
  }
}
