// Sample employee array
let employees = [
    { id: 1, name: "Alice", designation: "Developer" },
    { id: 2, name: "Bob", designation: "Designer" },
    { id: 3, name: "Charlie", designation: "Manager" }
];

// Function to display employees in table
function displayEmployees() {
    const tbody = document.querySelector("#employeeTable tbody");
    tbody.innerHTML = ""; // Clear existing rows

    employees.forEach((employee, index) => {
        const tr = document.createElement("tr");

        tr.innerHTML = `
            <td>${employee.id}</td>
            <td>${employee.name}</td>
            <td>${employee.designation}</td>
            <td><button onclick="removeEmployee(${index})">Delete</button></td>
        `;

        tbody.appendChild(tr);
    });
}

// Function to remove employee
function removeEmployee(index) {
    employees.splice(index, 1); // Remove from array
    displayEmployees();         // Re-render table
}

// Initial render
displayEmployees();
