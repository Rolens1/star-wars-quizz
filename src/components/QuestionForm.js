export default function QuestionForm({ handleScore, questions, handleSubmit }) {
  return (
    <>
      <div className="container mx-auto p-4">
        <form
          onSubmit={handleSubmit}
          className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 question-form"
        >
          {questions.map((question, index) => (
            <div key={index} className="mb-4">
              <p className="font-bold">{question.text}</p>
              {question.options.map((option, optIdx) => (
                <label key={optIdx} className="block">
                  <input
                    type="radio"
                    name={`question-${index}`}
                    value={option}
                    onChange={() => handleScore(option, optIdx)}
                  />
                  {option}
                </label>
              ))}
            </div>
          ))}

          {
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Confirm
            </button>
          }
        </form>
      </div>
    </>
  );
}
