{
  //

  function getProperty<T, Q extends keyof T>(obj: T, key: Q): T[Q] {
    return obj[key];
  }

  // const person = {
  //   name: "Mustakim",
  //   age: 24,
  //   city: "Bangladesh",
  // };
  
  // const name = getProperty(person, "name");
  // console.log(name);
  
  //
}
