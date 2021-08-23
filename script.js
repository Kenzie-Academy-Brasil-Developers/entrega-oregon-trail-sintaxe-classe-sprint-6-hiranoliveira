class Traveler {
    constructor(name){
        this._name = name
        this._food = 1
        this._isHealthy = true
    }

    get name(){
        return this._name
    }

    get food(){
        return this._food
    }
    get isHealthy(){
        return this._isHealthy
    }

    set name(name){
        this._name = name
    }

    set food(food){
        this._food = food
    }

    set isHealthy(healthy){
        this._isHealthy = healthy
    }
    
    hunt(){
        this._food += 2
    }

    eat(){
        if(this._food > 0){
            this._food -= 1
            this._isHealthy = true
        } else {
            this._isHealthy = false
        }
    }
}


class Wagon {
    constructor(capacity){
        this._capacity = capacity
        this._passengers = []
    }

    get capacity(){
        return this._capacity
    }

    get passengers(){
        return this._passengers
    }
    
    set capacity(capacity){
        this._capacity = capacity
    }

    set passengers(passengers){
        this._passengers = passengers
    }
    
    getAvailableSeatCount(){
        return (this._capacity - this._passengers.length)
    }
    
    join(traveler){
        if (this.getAvailableSeatCount() > 0){
            this._passengers.push(traveler)
        }
    }

    shouldQuarantine(){
        for (let i = 0; i < this._passengers.length; i++){
            if (this._passengers[i].isHealthy === false){
                return true
            }
        }
    }

    totalFood(){
        let count = 0
        for (let i = 0; i < this._passengers.length; i++){
            count += this._passengers[i].food
        }
        return count
    }
}

// Criar uma carroça que comporta 2 pessoas
let wagon = new Wagon(2);
// Criar três viajantes
let henrietta = new Traveler('Henrietta');
let juan = new Traveler('Juan');
let maude = new Traveler('Maude');
 
console.log(`${wagon.getAvailableSeatCount()} should be 2`);
 
wagon.join(henrietta);
console.log(`${wagon.getAvailableSeatCount()} should be 1`);
 
wagon.join(juan);
wagon.join(maude); // Não tem espaço para ela!
console.log(`${wagon.getAvailableSeatCount()} should be 0`);
 
henrietta.hunt(); // pega mais comida
juan.eat();
juan.eat(); // juan agora está com fome (doente)
 
console.log(`${wagon.shouldQuarantine()} should be true since juan is sick`);
console.log(`${wagon.totalFood()} should be 3`);