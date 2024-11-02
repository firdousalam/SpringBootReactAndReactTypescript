/*
Not allowed in ts
let userName = "Firdous";
userName = 10;
*/

/*
allowed in ts
let userName;
userName = "Firdous";
userName = 10;
*/
/*
way to declare variable in ts
let userName:string; //explicite type assignment
userName = "Firdous";

*/
let namehh :string = 'max';

/* Typescript boolean */
let userStatus:boolean = true;
userStatus = false;

/* typescript union */

let unName : string | number = 'max';
unName = 20;

/* typescript object */

// let user;
// user = {
//     name : 'technophile firdous',
//     age : 37,
//     isAdmin : true,
//     id : "abc"
// }
// we can achieve above by using 
//let user : object;
// dont all user = 'firdous';
// user = {
//     name : 'technophile firdous',
//     age : 37,
//     isAdmin : true,
//     id : "abc"
// }

// the issue with above we are not getting options

//better way to declare object in TS

/*
let user : {
    name : string;
    age : number;
    isAdmin : boolean,
    id : string | number
};
// dont all user = 'firdous';
 user= {
    name : 'technophile firdous',
    age : 37,
    isAdmin : true,
    id : "abc"
}

//we cannot use
user = {} 
*/
// array
let hobbies : Array<string>; // so here we declare array with string type
hobbies = ['sports','cooking','reading'];

//another way of writting arrays

let hobbiesNew : string[]; // number[] boolean[]
hobbiesNew = ['sports','cooking','reading'];