package com.example.expensetracker.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.example.expensetracker.model.Expense;

// This interface connects our Expense class to the database
public interface ExpenseRepository extends JpaRepository<Expense, Long> {
}
