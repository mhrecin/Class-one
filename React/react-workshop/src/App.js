import './App.css';
import Counter from './components/Counter';
import Switch from './components/Switch';
import Weather from './components/Weather';
import Quote from './components/Quote';
import QuoteList from './components/QuoteList';

function App() {
 const weatherData =  
  [
      { time: "Today", highF: 60, lowF: 50, conditions: "Mostly Cloudy" },
      { time: "Tomorrow", highF: 65, lowF: 53, conditions: "Partly Sunny" },
      { time: "Tuesday", highF: 66, lowF: 51, conditions: "Partly Sunny" }
  ];

  const quotes = [
    {
      author: "Nelson Mandela",
      text: "It always seems impossible until it’s done.",
      date: "2001"
    },
    {
      author: "Yoda",
      text: "Do. Or do not. There is no try.",
      date: "A long time ago"
    },
    { author: "Bugs Bunny", text: "What's up, doc?" }
  ];
  
  return (
    <div className="App">
      <h1>April React Practice</h1>
    {
      weatherData.map(data => (
        <Weather key={data.time} time={data.time} conditions={data.conditions} tempF={data.highF}/>
      ))
    }

    {
      quotes.map(quotes => (
        <quotes key={quotes.text} author={quotes.author} text={quotes.text} date={quotes.date}/>
      ))
    }

      <Counter />
      <Switch />
      {/* <Weather time="Today" conditions="Overcast" tempF={45}/>
      <Weather time="Tomorrow" conditions="Sunny" tempF={64}/>
      <Weather time="Tuesday" conditions="Slightly Cloudy" tempF={58}/> */}
      {/* <Quote author="Michele" text="Choose Happiness" date="2021"/>
      <Quote author="Ruby" text="Princess Roxy lives here" date="2016"/>
      <Quote author="Matilda" text="Smartest girl in the universe" /> */}
    </div>
  );
}

export default App;
