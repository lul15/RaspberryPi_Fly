<script>
   function validate() {
        var username = document.getElementById("usernameInput").value;
        var password = document.getElementById("passwordInput").value;
        if (username == null || username == "") {
            alert("Please enter the username.");
            return false;
        }
        if (password == null || password == "") {
            alert("Please enter the password.");
            return false;
        }
        alert('Login successful');
    } 
</script>