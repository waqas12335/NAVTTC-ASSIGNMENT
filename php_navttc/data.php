<?php
if($_SERVER['REQUEST_METHOD'] == 'POST'){
    $fname = $_POST["Fname"];
    $lname = $_POST["Lname"];
    $Age = $_POST["Age"];
    $Class = $_POST["Class"];
    $Subject = $_POST["Subject"];
    $Email = $_POST["Email"];
    $Norpass = $_POST["Password"];
} else {
    echo "Something is Missing";
    exit; // Stop further execution if the form is not submitted
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Submitted Data</title>
    <style>
        table {
            width: 50%;
            border-collapse: collapse;
            margin: 30px auto;
        }
        th, td {
            border: 1px solid #333;
            padding: 10px;
            text-align: left;
        }
        th {
            background-color: #f4f4f4;
        }
        caption {
            font-size: 1.5rem;
            margin-bottom: 10px;
        }
    </style>
</head>
<body>

    <table>
        <caption>Submitted Form Data</caption>
        <tr>
            <th>First Name</th>
            <td><?php echo htmlspecialchars($fname); ?></td>
        </tr>
        <tr>
            <th>Last Name</th>
            <td><?php echo htmlspecialchars($lname); ?></td>
        </tr>
        <tr>
            <th>Age</th>
            <td><?php echo htmlspecialchars($Age); ?></td>
        </tr>
        <tr>
            <th>Class</th>
            <td><?php echo htmlspecialchars($Class); ?></td>
        </tr>
        <tr>
            <th>Subject</th>
            <td><?php echo htmlspecialchars($Subject); ?></td>
        </tr>
        <tr>
            <th>Email</th>
            <td><?php echo htmlspecialchars($Email); ?></td>
        </tr>
        <tr>
            <th>Password</th>
            <td><?php echo htmlspecialchars($Norpass); ?></td>
        </tr>
    </table>

</body>
</html>
