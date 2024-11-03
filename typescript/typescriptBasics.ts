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

/*
// array
let hobbies : Array<string>; // so here we declare array with string type
hobbies = ['sports','cooking','reading'];

//another way of writting arrays

let hobbiesNew : string[]; // number[] boolean[]
hobbiesNew = ['sports','cooking','reading'];

*/

const API_KEY = 'abc';

/*
Function 
Typescript Function  function (para1 : type) : return type { return}
*/
function add(a:number,b:number):number{ // you can use void as return type for a function which don't return anything
    const result:number = a+b;
    return result;
}
// don't allow add(a,10) 
add(10,20);

/*
Defining Function Types
calcFn :(a:number,b:number)=>number mean a calcFn will accept two number and return a number
*/
// function calculate(a:number,b:number,calcFn :(a:number,b:number)=>number){
//     calcFn(a,b);
// }
// calculate(10,20,add)

/*
Typescript Custom Types TYPES
signature type name = details
*/

type AddFn = (a:number,b:number)=>number

function calculate(a:number,b:number,calcFn :AddFn){
    calcFn(a,b);
}
calculate(10,20,add)

// for union we can create a types
type unType = string|number;
let UserOdd : unType; // now i can store both string and number

UserOdd = 10;
UserOdd = "mukjgkjsdk ,mhkjd";
// we can create type for object

type userType = {
    name? : string;
    age? : number;
    isAdmin : boolean;
    id : unType;
};

let userUsingType : userType;
userUsingType = { isAdmin : true,id:"jkgjkgkjj"}


/* Typescript Interface
    signature 
    interface Name {key-type defination}
*/
interface Credentials {
    password : string;
    email:string;
}
let creds:Credentials;
creds = {
    password : 'abc',
    email : 'test@example.com'
}

/* by looking into types and interface it look both serve same functionality
them why we are using both or when to use which one 

1. with interface you can't define function defination but with types you can
2. in class you can extends interface and can add extra properties by implements of this interface
3. you can use same Interface name it will not cause error it will do declaration merging and extends it.
*/
class AuthCredentials implements Credentials{
    email: string;
    password: string;
    userName : string;
}
function login(credentials : Credentials){

}
//i can use 
login(creds);
//or
login(new AuthCredentials());
// case 3
interface Credentials {
    country? : string
}
let newData : Credentials; // now this variable contain 3 properties now as it extends previous properties

/*
merge two types using & operator
*/
type Admin ={
    permissions : string[];
}
type AppUser = {
    userName:string;
}
type AppAdmin = Admin & AppUser;

let admin : AppAdmin ;  // this variable contain permissions and userName keys

/*
Merging two interface 
*/

interface AdminInt{
    permissions : string[];
}
interface AppUserInt {
    userName:string;
}
interface AppAdminInt extends Admin ,AppUser{}

let adminInt : AppAdminInt ;  // this variable contain permissions and userName keys

/* Typescript literals type(like enum of database) */

let role : 'admin' | 'user' | 'editor'; // role can store only admin or user or editor

role = 'admin';
// not allow role='seperAdmin'

function performAction(action:string,role:'admin' | 'user' | 'editor'){

}
//we can use type to simplefy aboveCode 

type RoleType = 'admin' | 'user' | 'editor';

let roleTyp : RoleType; // role can store only admin or user or editor

roleTyp = 'admin';
// not allow roleTyp='seperAdmin'

function performActionType(action:string,role:RoleType){

}

/*
Generixc types
*/

let roles:Array<RoleType>;
roles = ['admin','editor'];

// if we don't know the data type then we can use generic types so we declare T as generic type
type DataStorage<T> = {
    storage: T[];
    add:(data:T)=>void;
}

const textStorage:DataStorage<string> = {
    storage:[],
    add(data){
        this.storage.push(data)
    }
}
const userStrorage : DataStorage<userType>={
    storage:[],
    add(data){
        this.storage.push(data);
    }
}

function merge<T,U>(a:T,b:U){
    return {
        ...a,
        ...b
    };
}
const merUser = merge<{name:string},{age:number}>({name:'firdous'},{age:35})