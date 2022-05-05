class Employee {
    public empCode: number;
    empName: string;
}

let emp = new Employee();
emp.empCode = 123;
emp.empName = "Sneha";


class proEmployee {
    public empName: string;
    protected empCode: number;

    constructor(name: string, code: number){
        this.empName = name;
        this.empCode = code;
    }
}



class SalesEmployee extends proEmployee{
    private department: string;
    
    constructor(name: string, code: number, department: string) {
        super(name, code);
        this.department = department;
    }
}

let proEmp = new SalesEmployee("John Smith", 123, "Sales");
console.log(emp);
console.log(proEmp);
