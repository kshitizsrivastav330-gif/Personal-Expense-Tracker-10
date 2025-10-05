const apiBaseUrl = "http://localhost:9090/api/expenses"; // backend URL
let editId = null;

// Fetch and render expenses
async function fetchExpenses() {
    try {
        const res = await fetch(apiBaseUrl);
        const expenses = await res.json();
        renderTable(expenses);
    } catch (err) {
        console.error("Error fetching expenses:", err);
    }
}

// Add or Update expense
async function addExpense() {
    const amount = document.getElementById("amount").value;
    const date = document.getElementById("date").value;
    const note = document.getElementById("note").value;

    if (!amount || !date || !note) {
        alert("Please fill all fields!");
        return;
    }

    const expenseData = { amount, date, note };

    try {
        if (editId === null) {
            await fetch(apiBaseUrl, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(expenseData)
            });
        } else {
            await fetch(`${apiBaseUrl}/${editId}`, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(expenseData)
            });
            editId = null;
        }

        // Clear form
        document.getElementById("amount").value = "";
        document.getElementById("date").value = "";
        document.getElementById("note").value = "";

        fetchExpenses();
    } catch (err) {
        console.error("Error saving expense:", err);
    }
}

// Delete expense
async function deleteExpense(id) {
    try {
        await fetch(`${apiBaseUrl}/${id}`, { method: "DELETE" });
        fetchExpenses();
    } catch (err) {
        console.error("Error deleting expense:", err);
    }
}

// Edit expense
async function editExpense(id) {
    try {
        const res = await fetch(`${apiBaseUrl}/${id}`);
        const expense = await res.json();
        document.getElementById("amount").value = expense.amount;
        document.getElementById("date").value = expense.date;
        document.getElementById("note").value = expense.note;
        editId = id;
    } catch (err) {
        console.error("Error fetching expense:", err);
    }
}

// Render table
function renderTable(expenses) {
    const table = document.getElementById("expenseTable");
    table.innerHTML = "";

    expenses.forEach(expense => {
        const row = table.insertRow();
        row.insertCell(0).innerText = expense.id;
        row.insertCell(1).innerText = expense.amount;
        row.insertCell(2).innerText = expense.date;
        row.insertCell(3).innerText = expense.note;

        const actions = row.insertCell(4);
        actions.innerHTML = `
            <button class="update" onclick="editExpense(${expense.id})">Update</button>
            <button class="delete" onclick="deleteExpense(${expense.id})">Delete</button>
        `;
    });
}

// Initial fetch
window.onload = fetchExpenses;
