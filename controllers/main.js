import Api from "../services/api.js";
import { CustomModal } from "./utils.js";
import Validation from "./../models/Validation.js";
import Person from "../models/person.js";
import Student from "../models/Student.js";
import Customer from "./../models/Customer.js";
import Employee from "./../models/Employee.js";

const api = new Api();
const validate = new Validation();
const getEle = (id) => document.getElementById(id);

const renderUI = (data) => {
  let content = "";
  if (data && data.length > 0) {
    data.forEach((person) => {
      content += `
      <tr>
        <td>${person.id}</td>
        <td><strong>${person.hoTen}</strong></td>
        <td>${person.address}</td>
        <td>${person.email}</td>
        <td>${person.tenCongTy}</td>
        <td>${person.chucVu}</td>
        <td>${person.luong}</td>
        <td>${person.diemTB}</td>

        <td class="style="text-align: center">
          <button id='btnEdit' class="btn my-3 me-1" data-bs-toggle="modal"
              data-bs-target="#exampleModal" onclick="editPerson('${person.id}')">Edit <i class="fa-solid fa-pen-to-square"></i></button>
          <button id='btnDelete' class="btn" onclick="removePerson('${person.id}')">Delete <i class="fa-solid fa-trash"></i></button>
        </td>
    </tr>
    `;
    });
  }
  getEle("tbodyPhone").innerHTML = content;
};

const getInforPhone = () => {};

const getListPerson = async () => {
  try {
    const res = await api.callApi("person", "get", null);
    console.log(res);
  } catch (err) {
    console.log(err);
  }
};
getListPerson();

getEle("btnAdd").onclick = function () {
  getEle("btnAddPerson").style.display = "block";
  getEle("btnUpdate").style.display = "none";
  document.getElementById("modal__form").reset();
};

const showFields = () => {
  const chucVu = getEle("chucVu").value;

  const displayFields = {
    Customer: [
      "id",
      "hoTen",
      "address",
      "email",
      "chucVu",
      "customerCompanyName",
      "customerInvoiceValue",
      "customerDanhGia",
    ],
    Student: [
      "id",
      "hoTen",
      "address",
      "email",
      "chucVu",
      "studentToan",
      "studentLy",
      "studentHoa",
    ],
    Employee: [
      "id",
      "hoTen",
      "address",
      "email",
      "chucVu",
      "employeeWorkDays",
      "employeeSalaryDays",
    ],
  };

  const allFields = Object.keys(displayFields).reduce((acc, key) => {
    return [...acc, ...displayFields[key]];
  }, []);

  allFields.forEach((field) => {
    const element = document.querySelector(`#${field}`);
    if (element) {
      element.style.display = displayFields[chucVu]?.includes(field)
        ? "block"
        : "none";
    }
  });
};

window.showFields = showFields;
