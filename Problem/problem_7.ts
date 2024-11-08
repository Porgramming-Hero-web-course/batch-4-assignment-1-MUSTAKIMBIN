{
  //
  class Car {
    constructor(
      public make: string,
      public model: string,
      public year: number
    ) {}
    getCarAge() {
      const currentYear = new Date().getFullYear();
      const carAge = currentYear - this.year;
      return carAge;
    }
  }
//   const toyota = new Car("toyota", "corrola", 2020)
//   console.log(toyota.getCarAge());
  
  //
}
