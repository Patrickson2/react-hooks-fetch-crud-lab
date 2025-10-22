import React from "react";
import QuestionItem from "./QuestionItem";

function QuestionList({ questions, onDeleteQuestion, onUpdateQuestion }) {
  const questionItems = questions.map((q) => (
    <QuestionItem
      key={q.id}
      question={q}
      onDelete={onDeleteQuestion}
      onUpdate={onUpdateQuestion}
    />
  ));

  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul className="QuestionList">{questionItems}</ul>
    </section>
  );
}

export default QuestionList;
