export abstract class Vehicle{ //las clases abstractas sirven principalmente para trabajar con herencia

    // getNumberOfSeats(): number{
    //     throw new Error("method not implemented");
    // }
    abstract getNumberOfSeats(): number; // toda clase que extienda de esta, deben implementar estos metodos

}

export class Tesla  extends Vehicle{

    constructor( private numberOfSeats: number ) {
        super();
    }

    getNumberOfSeats() {
        return this.numberOfSeats;
    }
}

export class Audi extends Vehicle{

    constructor( private numberOfSeats: number ) {
        super();
    }

    getNumberOfSeats() {
        return this.numberOfSeats;
    }
}

export class Toyota extends Vehicle {

    constructor( private numberOfSeats: number ) {
        super();
    }

    getNumberOfSeats() {
        return this.numberOfSeats;
    }
}

export class Honda extends Vehicle {

    constructor( private numberOfSeats: number ) {
        super();
    }

    getNumberOfSeats() {
        return this.numberOfSeats;
    }
}
