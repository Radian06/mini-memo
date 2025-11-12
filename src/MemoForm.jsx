import { useState } from "react";

function MemoForm({ addMemo }) {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) return;
    addMemo(text);
    setText("");
  };

  return (
    <form onSubmit={handleSubmit} className="memo-form">
      <input
        type="text"
        value={text}
        placeholder="메모를 입력하세요"
        onChange={(e) => setText(e.target.value)}
      />
      <button type="submit">추가</button>
    </form>
  );
}

export default MemoForm;
