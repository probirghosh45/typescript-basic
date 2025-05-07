{
  type GenericArray<T> = Array<T>;

  // const rollNumbers : number[] = [1, 2, 3, 4, 5];
  // const rollNumbers : Array<number> = [1, 2, 3, 4, 5];
  const rollNumbers: GenericArray<number> = [1, 2, 3, 4, 5];

  // const mentors : string[] = ["John", "Jane", "Jack", "Jill"];
  // const mentors : Array<string> = ["John", "Jane", "Jack", "Jill"];
  const mentors: GenericArray<string> = ["John", "Jane", "Jack", "Jill"];

  // const booleanArray : boolean[] = [true, false, true, false];
  // const booleanArray : Array<boolean> = [true, false, true, false];
  const booleanArray: GenericArray<boolean> = [true, false, true, false];

  const add = (a: number, b: number) => a + b;
  add(1, 2); // 3

  const user: GenericArray<{name : string ; age : number}> = [
    {
      name: "John",
      age: 30
    },
    {
      name: "Jane",
      age: 25
    }
  ];


   // genetic tuple

   type GenericTuple <T,U> = [T,U];
   const userTuple : [string,number] = ["John", 30];

   const userTuple2 : GenericTuple<string,number> = ["John", 30];
  const userTuple3 : GenericTuple<number,string> = [30, "John"];








}
