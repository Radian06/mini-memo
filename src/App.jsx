import { useEffect, useState } from "react";
import MemoList from "./MemoList";
import MemoForm from "./MemoForm";
import "./App.css";

function App() {
  const [memos, setMemos] = useState([]);

  const fetchMemos = async () => {
    const res = await fetch("/api/memos");
    const data = await res.json();
    setMemos(data);
  };

  const addMemo = async (text) => {
    await fetch("/api/memos", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text }),
    });
    fetchMemos();
  };

  const deleteMemo = async (id) => {
    await fetch(`/api/memos/${id}`, { method: "DELETE" });
    fetchMemos();
  };

  useEffect(() => {
    fetchMemos();
  }, []);

  return (
    <div className="App">
      <h1>📝 Mini Memo</h1>
      <MemoForm addMemo={addMemo} />
      <MemoList memos={memos} deleteMemo={deleteMemo} />
    </div>
  );
}

export default App;
