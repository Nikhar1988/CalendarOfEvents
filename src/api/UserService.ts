import axios, { AxiosResponse } from "axios";
import { IUser } from "../models/IUser";

export default class UserService {
    static async getUsers(): Promise<AxiosResponse<IUser[]>> { //указываем что метод статичный что бы можно было вызывать без создания класса
        return axios.get<IUser[]>('./users.json')
    }
}