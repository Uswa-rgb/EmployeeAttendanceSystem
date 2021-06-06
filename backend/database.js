var sql = require('mysql')
var md5 = require('md5')
var Cred = require('./cred')

var connection = sql.createConnection(Cred.CRED);


connection.connect(function(err) {
    if (err) {
        console.error('error connecting: ' + err);
        return;
    }
    console.log('connected as id ' + connection.threadId);
});

// connection.query("CREATE TABLE Deliveries" , function (error, results, fields) {
//       if (error) throw error;
//       console.log(results);
//     });
// connection.query("UPDATE Deliveries SET Status = 0 WHERE PackageID = 1" , function (error, results, fields) {
//         if (error) throw error;
//         console.log(results);
//     });
// connection.query("UPDATE Deliveries SET Status = 0 WHERE PackageID = 6" , function (error, results, fields) {
//     if (error) throw error;
//     console.log(results);
//    });
// connection.query('INSERT INTO Deliveries SET ?', {Address: 'House 102 Dha Lahore', Status: 0, 'Package_ID': 60}, function (error, results, fields) {
//   if (error) throw error;
//   console.log(results.insertId);
// });
// connection.query('DELETE FROM Deliveries WHERE Package_ID=60', function (error, results, fields) {
//       if (error) throw error;
//       console.log(results.insertId);
//     });
// connection.query('INSERT INTO Deliveries SET ?', {Address: 'House 102 Dha Lahore', Status: 0, 'Package_ID': 84}, function (error, results, fields) {
//   if (error) throw error;
//   console.log(results.insertId);
// });

// connection.query('INSERT INTO Deliveries SET ?', {Address: 'House 104 Dha Lahore', Status: 0, 'Package_ID': 94}, function (error, results, fields) {
//     if (error) throw error;
//     console.log(results.insertId);
//   });

// connection.query('INSERT INTO Deliveries SET ?', {Address: 'House 105 Dha Lahore', Status: 0, 'Package_ID': 11}, function (error, results, fields) {
//     if (error) throw error;
//     console.log(results.insertId);
//   });
// connection.query('INSERT INTO Deliveries SET ?', {Address: 'testing2', Status: 0, 'PackageID':6 ,'Employee_ID': 0}, function (error, results, fields) {
//     if (error) throw error;
//     console.log(results.insertId);
//   });

// connection.query('INSERT INTO Deliveries SET ?', {Address: 'testing2', Status: 2, 'PackageID': 7,'Employee_ID': 0}, function (error, results, fields) {
//   if (error) throw error;
//   console.log(results.insertId);
// });


// connection.query('SELECT * from Attendence', function (error, results, fields) {
//     if (error) throw error;
//     console.log('The Delivery is: ', results);
//   });

// connection.query('INSERT INTO Deliveries SET ?', {Address: 'testing', Status: 'P', 'Package ID': 1}, function (error, results, fields) {
//   if (error) throw error;
//   console.log(results.insertId);
// });

// connection.query('INSERT INTO Attendence SET ?', { 'EmployeeID': 10, Date: "2000/12/27", Status: 'A', Time: "10:14am" }, function (error, results, fields) {
//     if (error) {
//         console.log("ERROR INSERTING EMP")
//         throw error;
//     }
//     console.log(results.results);
// });

// connection.query('INSERT INTO Employees SET ?', { 'ID': 31, Name: "hourlyEmp", BasicSalary: 0 , HireDate: "2020-01-01" , EmployeeType: 'Hourly', CNIC: '42000-5468425-7', FatherName: 'hemployee', email:'hourly@gmail.com',pswd:'111100'}, function (error, results, fields) {
//     if (error) {
//         console.log("ERROR INSERTING EMP")
//         throw error;
//     }
//     console.log(results.results);
// });

// connection.query('INSERT INTO Employees SET ?', { 'ID': 32, Name: "Salaried", BasicSalary: 0 , HireDate: "2020-01-01" , EmployeeType: 'Salaried', CNIC: '42000-5494425-2', FatherName: 'semployee', email:'salaried@gmail.com',pswd:'01010'}, function (error, results, fields) {
//     if (error) {
//         console.log("ERROR INSERTING EMP")
//         throw error;
//     }
//     console.log(results.results);
// });

// connection.query('SELECT * from Employees', function (error, results, fields) {
//     if (error) throw error;
//     console.log('The Delivery is: ', results);
//   });



exports.con = connection;


