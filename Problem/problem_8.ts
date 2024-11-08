{
  //
  function validateKeys<T extends object>(obj: T, keys: (keyof T)[]): boolean {
    return keys.every((key) => key in obj);
  }

  // const person = { name: "mustakim", age: 20, email: "practice@go.com" };
  // console.log(validateKeys(person, ["name", "age"]));

  //
}
