export default function Header(params) {
  return (
    <div>
      <header className="bg-gradient-to-r from-blue-700 to-blue-400 text-white p-6 text-center rounded-b-lg shadow-lg header">
        <h1 className="text-3xl font-extrabold tracking-wide mb-2">
          Star Wars Quiz
        </h1>
        <p className="text-lg italic">What is your faction?</p>
      </header>
    </div>
  );
}
