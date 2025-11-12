function MemoList({ memos, deleteMemo }) {
  return (
    <ul className="memo-list">
      {memos.map((memo) => (
        <li key={memo.id}>
          <span>{memo.text}</span>
          <button onClick={() => deleteMemo(memo.id)}>삭제</button>
        </li>
      ))}
    </ul>
  );
}

export default MemoList;
