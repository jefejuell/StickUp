<?php
if (isset($_POST['Result']))
    {
$radioVal = $_POST["fav-hat"];

if($radioVal == "Ballcap")
{
    echo("You chose the Ballcap. Go Team SticksUP!");
}
else if ($radioVal == "CowboyHat")
{
    echo("SaddleUP and get them SticksUP!");
}
else if ($radioVal == "NeckGaiter")
{
    echo("Huh, how is this thing worn?! D;");
}
}
?>