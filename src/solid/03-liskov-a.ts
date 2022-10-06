import { Tesla, Audi, Toyota, Honda, Vehicle} from './03-liskov-b';


(() => {
    
    //El principio de liskov dice que nosotros deberiamos poder tener
    //clases o metodos que reciban como argumento subclases como en este
    //caso Vehiculos, pero tambien podemos mandar como argumento cualquier 
    //tipo de vehiculo y la funcion debe trabajar correctamente

    const printCarSeats = ( cars: Vehicle[] ) => {
        
        cars.forEach( car => {
            console.log( car.constructor.name, car.getNumberOfSeats() );
        });

        // for (const car of cars) {
         
        //     if( car instanceof Tesla ) {
        //         console.log( 'Tesla', car.getNumberOfSeats() )
        //         continue;
        //     }
        //     if( car instanceof Audi ) {
        //         console.log( 'Audi', car.getNumberOfSeats() )
        //         continue;
        //     }
        //     if( car instanceof Toyota ) {
        //         console.log( 'Toyota', car.getNumberOfSeats() )
        //         continue;
        //     }
        //     if( car instanceof Honda ) {
        //         console.log( 'Honda', car.getNumberOfSeats() )
        //         continue;
        //     }         

        // }

    }
    
    const cars = [
        new Tesla(7),
        new Audi(2),
        new Toyota(5),
        new Honda(5),
    ];


    printCarSeats( cars );

})();