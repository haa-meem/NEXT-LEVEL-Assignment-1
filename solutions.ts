function multiplyValue(value:number,multiplier:number=2){
    return value*multiplier;
}

function processInput(value:string|number|boolean){
if(typeof value=="string"){
    return value.trim().toLowerCase();
}
else if(typeof value=="number"){
    return value*10;
}
else{
    if(value==true){
        return "Active";
    }
    else{
        return "Inactive";
    }
}
}

function formatCoordinate(coordinates:readonly [number,number,string]){
    const [latitude,longitude,locationName]=coordinates;
    return `Location: ${locationName} (${latitude}, ${longitude})`;
}

function concatenateArrays<T>(...arrays:T[][]):T[]{
    return arrays.flat();
}

interface Course {
    title:string
    students:number
    isPublished:boolean
}

function getPopularCourses(courses:Course[],minStudents:number):Course[]{
return courses.filter(
    course=>course.isPublished==true && course.students>=minStudents
);
}

function pluckValues<T,K extends keyof T>(users:T[],key:K):T[K][]{
    return users.map(user=>user[key]);
}

class Employee{
    protected name:string;
    private baseSalary:number;

    constructor(name:string,baseSalary:number){
        this.name=name;
        this.baseSalary=baseSalary;
    }

    getDetails(){
        return `Employee: ${this.name}, Base Salary: ${this.baseSalary}`
    }
}

class Manager extends Employee{
    private department:string;

    constructor(name:string,baseSalary:number,department:string){
        super(name,baseSalary);
        this.department=department;
    }

    getRoleInfo(){
        return `Manager of ${this.department}: ${this.name}`;
    }
}

async function validateAgeAsync(age:number):Promise<string>{
return new Promise((resolve,reject)=>{
        if(age<18){
            reject(new Error("Access Denied: Must be 18 or older"));
            return;
        }
        
        setTimeout(()=>{
            resolve("Access Granted");
        },1000)
})
}