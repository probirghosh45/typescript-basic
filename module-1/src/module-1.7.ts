// spread operator

const studentList1: string[] = ["Rakib","Sakib","Rafiq","Rafi"];
const studentList2: string[] = ["Momin","Mokbul","Mokhlesur","Mokbulur"];

studentList1.push(...studentList2); 
console.log(studentList1); // Output: ["Rakib","Sakib","Rafiq","Rafi","Momin","Mokbul","Mokhlesur","Mokbulur"]

const studentList3: string[] = [...studentList1, ...studentList2,"Tisha Dey"];
console.log(studentList3); // Output: ["Rakib","Sakib","Rafiq","Rafi","Momin","Mokbul","Mokhlesur","Mokbulur", "Tisha Dey"]


const mentorList1 = {
    typescript : "Mezba",
    redux : "Mir",
    dbms : "Mzan"
}

const mentorList2 = {
    prisma : "Firoz",
    nextjs : "Tanmoy",
    cloud : "Nahid"
}

const mentorList3 = {
    ...mentorList1,
    ...mentorList2,
    love : "Probir Ghosh"
}


console.log(mentorList3); // Output: { typescript: 'Mezba', redux: 'Mir', dbms: 'Mzan', prisma: 'Firoz', nextjs: 'Tanmoy', cloud: 'Nahid', love: 'Probir Ghosh' }



// rest operator

const friendList = (...friends : string[]) : string[] =>{
    // return friends;
    return friends.map((friend: string): string => {
        console.log(`Hi ${friend}`);
        return `Hi ${friend}`;
    });

    // friends.forEach((friend: string): void => {
    //     console.log(`Hi ${friend},`);
    // }
    // );
    // return friends;
}

const friends = friendList("Rakib","Sakib","Rafiq","Rafi");
// output: Hi Rakib, Hi Sakib, Hi Rafiq, Hi Rafi
//console.log(friends); // Output: ["Hi Rakib","Hi Sakib","Hi Rafiq","Hi Rafi"]
// output: Hi Rakib, Hi Sakib, Hi Rafiq, Hi Rafi
// console.log(friends); // Output: ["Rakib","Sakib","Rafiq","Rafi"]



