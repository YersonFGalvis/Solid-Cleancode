
interface Bird{
    eat():void;
    walk():void;
}

interface FlyingBird{
    fly():void;
}

interface SwimmerBird{
    swim():void;
}

interface RunningBird{
    run():void;
}

//al estar dos clases usando el mismo metodo
//nos vemos con la posibilidad de implementar
//una interfaz
class Tucan implements Bird, FlyingBird{
    
    public fly(){}
    public eat(){}
    public walk(){}
}

class Hummingbird implements Bird, FlyingBird{

    public fly(){}
    public eat(){}
    public walk(){}
}

//Problema: el avestruz es un ave, pero en este caso, no vuela, pero su interfaz la obliga a 
//implementar estos metodos ya que es un ave, si el dia de mañana el metodo fly() deja de devolver un vacio
//tendriamos que corregirlo aun cuando el avestruz no implementa este metodo fly() 
class Ostrich implements Bird, RunningBird{

    public eat(){}
    public run(){}
    public walk(){}
}

class Penguin implements Bird, SwimmerBird{
    public swim(){}
    public eat(){}
    public walk(){}
}