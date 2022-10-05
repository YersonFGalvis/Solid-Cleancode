(() => {

    // APLICANDO EL PRINCIPIO DE RESPONSABILIDAD UNICA

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
        email: string,
        role: string,
    }

    class User {

        public email: string;
        public lastAccess: Date;
        public role: string;

        constructor({ email, role }: UserProps) {
            this.email = email;
            this.lastAccess = new Date();
            this.role = role;
        }

        checkCredential() {
            return true;
        }
    }

    interface SettingsProps {
        lastOpenFolders: string;
        workingDirectory: string;
    }

    class Settings {

        public lastOpenFolders: string;
        public workingDirectory: string;

        constructor({ lastOpenFolders, workingDirectory }: SettingsProps) {
            this.lastOpenFolders = lastOpenFolders;
            this.workingDirectory = workingDirectory;
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

    class UserSettings {
        public person: Person;
        public user: User;
        public settings: Settings;
        constructor({
             name , gender , birthdate,email,role,lastOpenFolders,workingDirectory
            }:UserSettingsProps){
            this.person = new Person({name, gender, birthdate})
            this.user = new User({email,role});
            this.settings = new Settings({lastOpenFolders, workingDirectory});
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

    console.log({ userSettings });
})();