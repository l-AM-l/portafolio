function addEvent() {
    var eventName = document.getElementById("eventName").value;
    var eventDate = document.getElementById("eventDate").value;
    var eventTime = document.getElementById("eventTime").value;

    var table = document.getElementById("scheduleTable");

    var newRow = table.insertRow(table.rows.length);

    var cell1 = newRow.insertCell(0);
    var cell2 = newRow.insertCell(1);
    var cell3 = newRow.insertCell(2);

    // Populate the cells with the form input values
    cell1.innerHTML = eventName;
    cell2.innerHTML = eventDate;
    cell3.innerHTML = eventTime;

    // Clear the form fields
    document.getElementById("scheduleForm").reset();
}
