{
  //

  function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
    return obj[key];
  }

  const person = {
    name: "Mustakim",
    age: 24,
    city: "Bangladesh",
  };
  
  const name = getProperty(person, "name");
  console.log(name);
  
  //
}
