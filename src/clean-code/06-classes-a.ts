( () => {

    //NO APLICANDO EL PRINCIPIO DE RESPONSABILIDAD UNICA
    type Gender = 'M'|'F' ;

     class Person{
         //Forma corta
         constructor(
             public name: string,
             public gender: Gender,
             public birthdate: Date
         ){}
        //Forma larga

    //     public name: string;
    //     public gender: Gender;
    //     public birthdate: Date;

    //     constructor(name: string, gender: Gender, birthdate: Date){
    //         this.name = name;
    //         this.gender = gender;
    //         this.birthdate = birthdate;
    //     }

     }

        const newPerson = new Person('yerson','M',new Date('2001-09-03'));
        console.log(newPerson);

     class User extends Person{

        public lastAccess: Date;

        constructor(
        public email:string,
        public role :string,
        
        name:string,
        gender:Gender,
        birthdate:Date,
        ){
            super(name,gender,birthdate);
            this.lastAccess = new Date();
        }

        checkCredential(){
            return true;
        }
     }             
     
     class UserSettings extends User{
        constructor(
            public workingDirectory : string,
            public lastOpenFolders  : string,
            email                   : string,
            role                    : string,
            name                    : string,
            gender                  : Gender,
            birthdate               : Date
        ){
            super(email, role, name, gender, birthdate);
        }
     }

     const userSettings = new UserSettings(
        '/usr/home',
        '/home',
        'yerson@google.com',
        'Admin',
        'Yerson',
        'M',
        new Date('2001-09-03')
     );

     console.log({userSettings, areCredentialsValid: userSettings.checkCredential()});
})();