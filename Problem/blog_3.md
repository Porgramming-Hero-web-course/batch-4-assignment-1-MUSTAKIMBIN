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




