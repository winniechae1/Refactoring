import { getDefaultOwner } from "./6-6.js";

const owner = getDefaultOwner();
// owner.firstName = "엘리"; // set이 안됨
console.log(owner.firstName);
console.log(getDefaultOwner());
