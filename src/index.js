import "./styles.css";
import { createStore } from "./createStore";
import { rootReducer } from "./redux/rootReducer";

const counter = document.getElementById("counter");
const addBtnNode = document.getElementById("add");
const subBtnNode = document.getElementById("sub");
const asyncBtnNode = document.getElementById("async");
const themeBtnNode = document.getElementById("theme");

const store = createStore(rootReducer, 0);

addBtnNode.addEventListener("click", () => {
    store.dispatch({ type: "INCREMENT" });
});

subBtnNode.addEventListener("click", () => {
    store.dispatch({ type: "DECREMENT" });
});

asyncBtnNode.addEventListener("click", () => {
    setTimeout(() => {
        store.dispatch({ type: "INCREMENT" });
    }, 2000);
});

store.subscribe(() => {
    const state = store.getState();
    counter.textContent = state;
});

store.dispatch({ type: "INIT_APPLICATION" });

themeBtnNode.addEventListener("click", () => {
    // document.body.classList.toggle("dark");
});
