import Sidebar from './components/Sidebar';

function App() {
  return (
    <div className="flex h-screen bg-forest text-lightText">
      <Sidebar />
      <main className="flex-1 p-10">
        <h1 className="text-3xl font-bold">Welcome to your Carbon Dashboard 🌍</h1>
      </main>
    </div>
  );
}

export default App;

