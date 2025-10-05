package com.example.expensetracker.controller;

import org.springframework.web.bind.annotation.*;
import java.util.*;
import java.time.LocalDate;

import com.example.expensetracker.model.Expense;
import com.example.expensetracker.repository.ExpenseRepository;

// This is a REST Controller — it handles API requests
@RestController
@RequestMapping("/api/expenses")
public class ExpenseController {

    private final ExpenseRepository repo;

    // Constructor - connects this controller to the repository
    public ExpenseController(ExpenseRepository repo) {
        this.repo = repo;
    }

    // 1️⃣ Add a new expense
    @PostMapping
    public Expense addExpense(@RequestBody Expense expense) {
        if (expense.getDate() == null) {
            expense.setDate(LocalDate.now()); // if no date, use today
        }
        return repo.save(expense);
    }

    // 2️⃣ View all expenses
    @GetMapping
    public List<Expense> getAllExpenses() {
        return repo.findAll();
    }

    // 3️⃣ View one expense by ID
    @GetMapping("/{id}")
    public Expense getExpenseById(@PathVariable Long id) {
        return repo.findById(id).orElseThrow(() -> new RuntimeException("Expense not found"));
    }

    // 4️⃣ Update an expense
    @PutMapping("/{id}")
    public Expense updateExpense(@PathVariable Long id, @RequestBody Expense updatedExpense) {
        Expense existing = repo.findById(id).orElseThrow(() -> new RuntimeException("Expense not found"));
        existing.setAmount(updatedExpense.getAmount());
        existing.setDate(updatedExpense.getDate());
        existing.setCategory(updatedExpense.getCategory());
        existing.setNote(updatedExpense.getNote());
        return repo.save(existing);
    }

    // 5️⃣ Delete an expense
    @DeleteMapping("/{id}")
    public String deleteExpense(@PathVariable Long id) {
        repo.deleteById(id);
        return "Expense deleted successfully!";
    }
}

