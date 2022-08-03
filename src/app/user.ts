export class User{
    firstname: string;
    lastname: string;
    email: string;
    status: string

    constructor(firstname:string, lastname:string, email:string, status:string)
    {
        this.firstname = firstname;
        this.lastname = lastname;
        this.email = email;
        this.status = status
    }
}