{
  //
  interface Profile {
    name: string;
    age: number;
    email: string;
  }
  function updateProfile(profile: Profile, obj: Partial<Profile>) {
    return { ...profile, ...obj };
  }

//   const myProfile = { name: "mustakim", age: 25, email: "mustakim@bin.com" };
//   console.log(updateProfile(myProfile, { age: 29 }));

  //
}
