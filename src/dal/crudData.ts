import { Iuser } from "../medels/userModel"
import { users } from "../dataBase/userDataBase"

export function getAllUsers() {return users}

export function getUserById(id: string) {return users.find(user => user.id === id)}

export function createUser(user: Iuser) {return users.push(user)}

export function updateUser(id: string, user: Iuser) {return users.find(user => user.id === id),users.push(user)}

export function deleteUser(id: string) {return users.splice(users.findIndex(user => user.id === id),1)}