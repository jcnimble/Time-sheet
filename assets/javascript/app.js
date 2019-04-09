$(document).ready(function(){

    $("#submit").on("click",function(event){
        event.preventDefault();
        console.log("click");

        var name = $("#name").val();
        var role = $("#role").val();
        var start = $("#date").val();
        var rate = $("#rate").val();

        var monthsWorked = 5;
        var totalBilled = rate * monthsWorked;

        var row = $("<tr>");

        row.append(addData(name)).append(addData(role)).append(addData(start)).append(addData(monthsWorked)).append(addData(rate)).append(addData(totalBilled));

        function addData(data){
            console.log(data);
            var td = $("<td>");
            td.text(data);
            return td;
        }

        $("#employees").append(row);
    });

    function test(){
        
        var name = "Jenn";
        var role = "coder";
        var start = "10/10/19";
        var rate = "$100";
        var monthsWorkd = 5;
        var totalBilled = rate * monthsWorked;

        var row = $("<tr>");
        row.append(addData(name)).append(addData(role)).append(addData(start)).append(addData(monthsWorked)).append(addData(rate)).append(addData(totalBilled));

        function addData(data){
            var td = $("<td>");
            td.text(data);
        }
    }



});