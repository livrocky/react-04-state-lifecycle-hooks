import { useState, useEffect } from 'react';
// create Counter komponeta
// atvaizdujam div ir h2
// h2 reiksme bus state kintamasis (0)
// kas 2 sekundes norim didinti kintamojo reiksme 1

function Counter() {
  console.log('<Counter/> ran');
  const [counterValue, setCouterValue] = useState(0);

  function padidinti() {
    // jei musu nauja busena priklauso nuo pries tai buvusios
    // mes turim antaujinimo reiksme paduoti su funkcija
    setCouterValue((prevState) => {
      //   console.log('prevState ===', prevState);
      return prevState + 1;
    });
  }
  useEffect(() => {
    setTimeout(() => {
      // setCouterValue(counterValue + 1);
      // counterValue += 1;
      // counterValue = counterValue + 1;
      padidinti();
    }, 3000);
  }, []);

  return (
    <div>
      <h2>counter Value {counterValue}</h2>
      <button onClick={padidinti}>up</button>
    </div>
  );
}

export default Counter;
