import Api from "./Api";
import Cookie from "js-cookie";

export default {
 getCookie(){
 	return Api.get("/csrf-cookies");
 }
};
