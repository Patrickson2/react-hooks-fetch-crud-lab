import React, { useState } from "react";

function QuestionItem({ question, onDelete, onUpdate }) {
  const { id, prompt, answers } = question;
  const [selectedIndex, setSelectedIndex] = useState(question.correctIndex);

  function handleDeleteClick() {
    onDelete(id);
  }

  function handleCorrectAnswerChange(e) {
    const newIndex = parseInt(e.target.value);
    setSelectedIndex(newIndex); // update immediately for test DOM
    onUpdate({ ...question, correctIndex: newIndex }); // sync backend + parent
  }

  const options = answers.map((a, i) => (
    <option key={i} value={i}>
      {a}
    </option>
  ));

  return (
    <li>
      <h4>Question {id}</h4>
      <h5>Prompt: {prompt}</h5>
      <label>
        Correct Answer:
        <select value={selectedIndex} onChange={handleCorrectAnswerChange}>
          {options}
        </select>
      </label>
      <button onClick={handleDeleteClick}>Delete Question</button>
    </li>
  );
}

export default QuestionItem;
