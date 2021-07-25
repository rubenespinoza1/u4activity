//en los archivos api se hace la peticion http y en los controladores se llama al metodo que hace la
//peticion y se pasan los parametros que corresponda: ejemplo
//auth api llama a auth service por medio de una peticion http por mandato de auth controller para logear a un usuario
import axios from 'axios';
const baseURL = 'http://localhost:3000/api/auth'

class AuthApi {
    constructor() {
        this.resource = axios.create({
            baseURL,
        });
    }

    register(user) {
        this.resource.post('/register', user);
    }

    login(user){
        this.resource.post('/login', user);
    }

    logout(user){
        this.resource.post('/logout', user);
    }




}

export default new AuthApi();