import { Outlet, Link } from "react-router-dom";

export default function App() {
    return (
        <div>
            <h1>Bookkeeper!</h1>
            <nav
                style={{
                    borderBottom: "solid 1px",
                    paddingBottom: "1rem"
                }}
            >
                <Link to="/invoices">Invoices</Link> | {" "}
                <Link to="/expenses">Expenses</Link> | {" "}
                <Link to="/game">Game</Link> | {" "}
                <Link to="/counter">Counter</Link> | {" "}
                <Link to="/immutable">Immutable</Link> | {" "}
                <Link to="/hoc">HOC</Link>
            </nav>
            <Outlet />
        </div>
    )
}