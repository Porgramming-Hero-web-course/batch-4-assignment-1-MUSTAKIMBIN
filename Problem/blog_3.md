## Why are Type Guards Necessary? Discuss Various Types of Type Guards and Their Use Cases.

Hello! Next level developer. Hope you all are donig well. Today we will discuss about Guards. Not Body Guards. We will  discuss about Type Guards in TypeScript and there various Use cases.

#### What is Guards in TypeScript?

Type Guards is very powerful feature in TypeScript. It allow us to  runtime type checks and narrow down the type of a variable within a specific code block. So we can ensure type safety and prevents potential runtime errors. Sounds good? yea!!

###### Let's see an example
```
 type Circle = {
    shape: string;
    radius: number;
  };
  type Rectangle = {
    shape: string;
    width: number;
    height: number;
  };
  type Shape = Circle | Rectangle;

  function calculateShapeArea(shape: Shape){
    if (shape.shape === "circle") {
      return Math.PI * (shape as Circle).radius ** 2;
    }
     else if (shape.shape === "rectangle") {
      return (shape as Rectangle).width * (shape as Rectangle).height;
    }
  }
  ```

The calculateShapeArea function take's union type and check if the shape property value is equal "circle" then execute the next block of code. If not go to the else if block and check the shape property value is equal "rectangle" then execute teh next block of code. 

Here we ensure the type. This is called Type Guards.

#### Why Use Type Guards?

- We can prevents runtime errors by ensuring correct type usage.
- It makes code more self-explanatory and easier to understand.
- Allows you to write more precise and flexible code.

#### typeof Guard

It checks the type of a variable at runtime. For use this Guard you have to use typeof keyward in your code. It check the type of any variable.

```
function printType(value: string | number) {
    if (typeof value === 'string') {
        console.log(`Value is a string: ${value}`);
    } else {
        console.log(`Value is a number: ${value}`);
    }
}

```
In the printType function if block check the type of the value is it "string" then executed the next block of code. Nithe go to the else block.

#### instanceof Guard
 Imagine you have a box of animals. Some are dogs, and others are cats. You want to know if an animal is a dog. You can check if it has four legs and barks. This is similar to how an instanceof guard works
```
class Animal {
    name: string;
}

class Dog extends Animal {
    breed: string;
}

function makeSound(animal: Animal) {
    if (animal instanceof Dog) {
        console.log('Woof!');
    } else {
        console.log(' animal sound');
    }
}
```
###### And also custom Guard that we see in our first block of code in this blog

I hope you enjoy this blog. It's all for today. I'll see you in the next one 😃.



