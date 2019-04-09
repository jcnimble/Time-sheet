$(document).ready(function(){

    $("#submit").on("click",function(event){

        event.preventDefault();


        var name = $("#name").val();
        var role = $("#role").val();
        var start = $("#date").val();
        var rate = $("#rate").val();

        var monthsWorked = 5;
        var totalBilled = rate * monthsWorked;

        var row = $("<tr>");

        row.append(addData(name)).append(addData(role)).append(addData(start)).append(addData(monthsWorked)).append(addData(rate)).append(addData(totalBilled));

        function addData(data){

            var td = $("<td>");
            td.text(data);
            return td;
        }

        $("#employees").append(row);
    });


});