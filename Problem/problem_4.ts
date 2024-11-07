{
  //
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

//   const circle: Circle = { shape: "circle", radius: 5 };
//   const rectangle: Rectangle = { shape: "rectangle", width: 6, height: 4 };

//   console.log(calculateShapeArea(circle)); 
//   console.log(calculateShapeArea(rectangle));

  //
}
