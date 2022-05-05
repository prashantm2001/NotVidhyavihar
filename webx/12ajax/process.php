<h2>Here is the information submitted by you:</h2>
<p>Name: <b><?php echo $_POST["name"] ?? ''; ?></b></p>
<p>gender: <b><?php echo $_POST["gender"] ?? ''; ?></b></p>
<p>Favorite Color: <b><?php echo $_POST["color"] ?? ''; ?></b></p>
<p>Hobbies: <b><?php if(isset($_POST["hobbies"])){ echo implode(", ", $_POST["hobbies"]); } ?></b></p>
<p>Comment: <b><?php echo $_POST["comment"] ?? ''; ?></b></p>