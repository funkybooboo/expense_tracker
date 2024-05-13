import './App.css'
import ExpenseList from "./components/ExpenseList.tsx";
import Expense from "./types/Expense.ts";
import {useState} from "react";
import ExpenseFilter from "./components/ExpenseFilter.tsx";
import ExpenseForm from "./components/ExpenseForm.tsx";


function App() {

    const [expenses, setExpenses] = useState<Expense[]>([]);
    const [selectedCategory, setSelectedCategory] = useState('');

    const onDelete = (id: number) => {
        setExpenses(expenses.filter(expense => expense.id !== id));
    };

    const visibleExpenses = selectedCategory ? expenses.filter(expense => expense.category === selectedCategory) : expenses;

    return (
        <>
            <div className="mb-5">
                <ExpenseForm onSubmit={expense => setExpenses([...expenses, {...expense, id: expenses.length + 1}])} />
            </div>
            <div className="mb-3">
                <ExpenseFilter onSelectCategory={category => setSelectedCategory(category)}/>
            </div>
            <ExpenseList expenses={visibleExpenses} onDelete={onDelete} />
        </>
    )
}

export default App
