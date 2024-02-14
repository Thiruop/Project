function display(id){
    var name = document.querySelector("#sname").value;
    var first=document.querySelector("#firsGraduate").value;
    var dept=document.querySelector("#deptname").value;
    var Admission=30000;
    switch(dept){
        case EEE | CSE | IT:
            var Tution=45000;
            break;
        case ECE | CIVIL:
            var Tution=50000;
            break;
        case MECH:
            var Tution=55000;
            break;
    }
}