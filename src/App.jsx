import TimerChallenge from './components/TimerChallenge.jsx';

function App() {
  return (
    <div id="challenges">
      <TimerChallenge title="Easy" targetTime={1} />
      <TimerChallenge title="Not easy" targetTime={5} />
    </div>
  );
}

export default App;
