/*
Not allowed in ts
let userName = "Firdous";
userName = 10;
*/
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
var namehh = 'max';
/* Typescript boolean */
var userStatus = true;
userStatus = false;
/* typescript union */
var unName = 'max';
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
var API_KEY = 'abc';
/*
Function
Typescript Function  function (para1 : type) : return type { return}
*/
function add(a, b) {
    var result = a + b;
    return result;
}
// don't allow add(a,10) 
add(10, 20);
function calculate(a, b, calcFn) {
    calcFn(a, b);
}
calculate(10, 20, add);
var UserOdd; // now i can store both string and number
UserOdd = 10;
UserOdd = "mukjgkjsdk ,mhkjd";
var userUsingType;
userUsingType = { isAdmin: true, id: "jkgjkgkjj" };
var creds;
creds = {
    password: 'abc',
    email: 'test@example.com'
};
/* by looking into types and interface it look both serve same functionality
them why we are using both or when to use which one

1. with interface you can't define function defination but with types you can
2. in class you can extends interface and can add extra properties by implements of this interface
3. you can use same Interface name it will not cause error it will do declaration merging and extends it.
*/
var AuthCredentials = /** @class */ (function () {
    function AuthCredentials() {
    }
    return AuthCredentials;
}());
function login(credentials) {
}
//i can use 
login(creds);
//or
login(new AuthCredentials());
var newData; // now this variable contain 3 properties now as it extends previous properties
var admin; // this variable contain permissions and userName keys
var adminInt; // this variable contain permissions and userName keys
/* Typescript literals type(like enum of database) */
var role; // role can store only admin or user or editor
role = 'admin';
// not allow role='seperAdmin'
function performAction(action, role) {
}
var roleTyp; // role can store only admin or user or editor
roleTyp = 'admin';
// not allow roleTyp='seperAdmin'
function performActionType(action, role) {
}
/*
Generixc types
*/
var roles;
roles = ['admin', 'editor'];
var textStorage = {
    storage: [],
    add: function (data) {
        this.storage.push(data);
    }
};
var userStrorage = {
    storage: [],
    add: function (data) {
        this.storage.push(data);
    }
};
function merge(a, b) {
    return __assign(__assign({}, a), b);
}
var merUser = merge({ name: 'firdous' }, { age: 35 });
