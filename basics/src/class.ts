class Singleton {
    private static instance: Singleton;

    private constructor() {}

    static getInstance() {
        if(!Singleton.instance) {
            Singleton.instance = new Singleton();
        }
        return Singleton.instance;
    }
}

const person1 = Singleton.getInstance();
const person2 = Singleton.getInstance();
console.log(person1 === person2)