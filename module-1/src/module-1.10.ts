{
  //  union type

  type FrontendDeveloper = "FakibajDeveloper" | "JuniorDeveloper";
  type FullStackDeveloper = "FakibajDeveloper" | "SeniorDeveloper";
  type Developer = FrontendDeveloper | FullStackDeveloper;

  const newDeveloper: Developer = "FakibajDeveloper"; // Correct: Type '"FakibajDeveloper"' is assignable to type 'Developer'
  const newDeveloper2: FullStackDeveloper = "SeniorDeveloper"; // Correct: Type '"SeniorDeveloper"' is assignable to type 'FullStackDeveloper
  const newDeveloper3: FrontendDeveloper = "JuniorDeveloper"; // Correct: Type '"JuniorDeveloper"' is assignable to type 'FrontendDeveloper'
  const newDeveloper4: Developer = "ExpertDeveloper"; // Correct: Type '"JuniorDeveloper"' is assignable to type 'Developer'

  // intersection type

  type Person = {
    name: string;
    age: number;
    isStudent: boolean;
    email?: string;
    hobby : string[],
    lover : 'Probir Ghosh'
  };

  type Address = {
    city: string;
    country: string;
  };

  type User = Person & Address;

  const userData: User = {
    name: "Tisha Dey",
    age: 21,
    isStudent: true,
    hobby : ["gardening", "reading" , "writing" , "cooking"],
    lover : "Probir Ghosh",
    city: "Bhola",
    country: "Bangladesh",
  };

  
}
