function display() {
    var sname = document.getElementById("sname").value;
    var deptname = document.getElementById("deptname").value;
    var preferHostel = document.getElementsByName("preferHostel");
    var firstGraduate = document.getElementById("firstGraduate").checked;
    var admissionFee = 30000;
    var tuitionFee;
    var hostelFee = 0;
    var totalCollegeFee;

    switch (deptname) {
        case "EEE":
            tuitionFee = 45000;
            break;
        case "ECE":
            tuitionFee = 50000;
            break;
        case "CSE":
            tuitionFee = 45000;
            break;
        case "MECH":
            tuitionFee = 55000;
            break;
        case "CIVIL":
            tuitionFee = 50000;
            break;
        case "IT":
            tuitionFee = 45000;
            break;
    }

    if (preferHostel[0].checked) {
        hostelFee = 75000;
    }

    totalCollegeFee = admissionFee + tuitionFee + hostelFee;

    if (firstGraduate) {
        totalCollegeFee -= 20000;
    }

    document.getElementById("result").innerHTML = "Hi " + sname + ",<br>Your Admission Fee is Rs. " + admissionFee + "<br>Tuition Fee is Rs. " + tuitionFee + "<br>Hostel Fee is Rs. " + hostelFee + "<br>Total College Fee is Rs. " + totalCollegeFee;

    return false;
}