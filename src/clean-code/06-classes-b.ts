(() => {

    //NO APLICANDO EL PRINCIPIO DE RESPONSABILIDAD UNICA

    type Gender = 'M' | 'F';

    interface PersonProps {
        birthdate: Date;
        gender: Gender;
        name: string;
    }

    class Person {

        public birthdate: Date;
        public gender: Gender;
        public name: string;

        //Forma corta
        constructor({ birthdate, gender, name }: PersonProps) {
            this.birthdate = birthdate;
            this.gender = gender;
            this.name = name;
        }
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
    
    interface UserProps {
        birthdate: Date,
        email: string,
        gender: Gender,
        name: string,
        role: string,
    }

    class User extends Person {

        public email: string;
        public lastAccess: Date;
        public role: string;

        constructor({ birthdate, email, gender, name, role }: UserProps) {
            super({ name, gender, birthdate });
            this.email = email;
            this.lastAccess = new Date();
            this.role = role;
        }

        checkCredential() {
            return true;
        }
    }

    interface UserSettingsProps {
        birthdate: Date
        email: string;
        gender: Gender;
        lastOpenFolders: string;
        name: string;
        role: string;
        workingDirectory: string;
    }

    class UserSettings extends User {

        public lastOpenFolders: string;
        public workingDirectory: string;

        constructor({ birthdate, email, gender, lastOpenFolders, name, role, workingDirectory }: UserSettingsProps) {
            super({ email, role, name, birthdate, gender });
            this.lastOpenFolders = lastOpenFolders;
            this.workingDirectory = workingDirectory;
        }
    }

    const userSettings = new UserSettings({
        lastOpenFolders: '/home',
        workingDirectory: '/usr/home',
        role: 'Admin',
        gender: 'M',
        name: 'Yerson',
        email: 'yerson@google.com',
        birthdate: new Date('2001-09-03')
    }
    );

    console.log({ userSettings, areCredentialsValid: userSettings.checkCredential() });
})();