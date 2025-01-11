// Using the inheritance we can share properties & menthods between the classes.
// We have to create relation between the Two classes (Parent & Chid=ld relation)
// We can share the properties or methods only from Parent Class to Child Class, Viceversa not possible

class A{
    name = 'Abhi';
}

class B extends A {                         // A is the parent & B is the child
    display(){
        console.log(this.name);
    }
}

var b1 = new B();
b1.display();

