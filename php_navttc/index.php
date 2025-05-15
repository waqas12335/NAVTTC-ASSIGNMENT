
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Create Account - School Portal</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.2/dist/css/bootstrap.min.css" rel="stylesheet">
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" rel="stylesheet">
    <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" rel="stylesheet">
<link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" rel="stylesheet">
<link rel="stylesheet" href="styles.css">
<style>
        body {
            background-color: #f4f8fa;
            font-family: 'Arial', sans-serif;
        }
        .container {
            max-width: 800px;
            margin-top: 50px;
        }
        .form-control {
            border-radius: 20px;
        }
        .btn {
            border-radius: 20px;
        }
        .form-header {
            color: #4CAF50;
            font-size: 2rem;
        }
        .card {
            box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
        }
        .form-group label {
            font-weight: bold;
        }
        .footer-text {
            font-size: 0.9rem;
        }
        .btn-primary {
            background-color: #4CAF50;
            border: none;
        }
        .btn-primary:hover {
            background-color: #45a049;
        }
        @media (max-width: 767px) {
            .form-group {
                margin-bottom: 15px;
            }
        }
    </style>
</head>
<body>

<div class="container">
    <h2 class="text-center mb-4 form-header"><i class="fas fa-school"></i> Create an Account</h2>
    <form id="signupForm" method="post" class="bg-white p-4 rounded shadow card" action="data.php">
        <div class="form-row">
            <!-- First Name -->
            <div class="form-group col-md-6">
                <label for="Fname"><i class="fas fa-user"></i> First Name</label>
                <input type="text" class="form-control" id="Fname" required name="Fname" placeholder="Enter your first name">
            </div>

            <!-- Last Name -->
            <div class="form-group col-md-6">
                <label for="Lname"><i class="fas fa-user"></i> Last Name</label>
                <input type="text" class="form-control" id="Lname" required name="Lname" placeholder="Enter your last name">
            </div>
        </div>
        
        <div class="form-row">
            <!-- Age -->
            <div class="form-group col-md-6">
                <label for="Age"><i class="fas fa-calendar-alt"></i> Age</label>
                <input type="number" class="form-control" id="Age" required name="Age" placeholder="Enter your age" min="1">
            </div>

            <!-- Class -->
            <div class="form-group col-md-6">
                <label for="Class"><i class="fas fa-chalkboard"></i> Class</label>
                <input type="text" class="form-control" id="Class" required name="Class" placeholder="Enter your class (e.g. 10th Grade)">
            </div>
        </div>

        <div class="form-row">
            <!-- Subject -->
            <div class="form-group col-md-6">
                <label for="Subject"><i class="fas fa-book"></i> Subject</label>
                <input type="text" class="form-control" id="Subject" required name="Subject" placeholder="Enter your subject (e.g. Mathematics)">
            </div>
            
            <!-- Email -->
            <div class="form-group col-md-6">
                <label for="Email"><i class="fas fa-envelope"></i> Email</label>
                <input type="email" class="form-control" id="Email" placeholder="Enter your email" required name="Email">
            </div>
        </div>

        <div class="form-row">
            <!-- Password -->
            <div class="form-group col-md-12">
                <label for="Password"><i class="fas fa-lock"></i> Password</label>
                <input type="password" class="form-control" id="Password" placeholder="Create a password" required name="Password">
            </div>

            <!-- Profile Picture -->
      
        
        <!-- Sign-Up Button -->
        <button type="Submit" class="btn btn-primary btn-block" id="signUpButton">Sign Up</button>


        <!-- Confirmation Modal -->
        <div class="modal fade" id="confirmModal" tabindex="-1" role="dialog" aria-labelledby="confirmModalLabel" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="confirmModalLabel">Confirm Registration</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        Are you sure you want to proceed to the dashboard?
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancel</button>
                        <button type="submit" class="btn btn-primary animate-button" id="confirmSignUp">Proceed</button>
                    </div>
                </div>
            </div>
        </div>

    </form>
</div>
<script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.10.2/dist/umd/popper.min.js"></script>
<script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@4.5.2/dist/js/bootstrap.bundle.min.js"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
</body>
</html>