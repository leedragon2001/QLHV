import Person from "./person.js";

export default class Student extends Person {
  constructor(id, hoTen, address, email, toan, ly, hoa) {
    super(id, hoTen, address, email);
    this.toan = toan;
    this.ly = ly;
    this.hoa = hoa;
    this.diemTB = 0;
  }
  tinhDTB() {
    this.diemTB = Number(this.toan + this.ly + this.hoa) / 3;
  }
}
