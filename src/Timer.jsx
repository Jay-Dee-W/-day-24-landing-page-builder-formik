
import { useEffect, useState } from 'react';
import './Timer.css';

function Timer() {

  const [timerDays, setTimerDays] = useState('00')
  const [timerHours, setTimerHours] = useState('00')
  const [timerMinutes, setTimerMinutes] = useState('00')
  const [timerSeconds, setTimerSeconds] = useState('00')
  const Background = './background1.jpg'

  const startTimer = ()=> {
   
    let countdownDate = new Date('May 06, 2021 10:53:00').getTime()

      let interval = setInterval(() => {
      
      let now = new Date().getTime();
      let distance = countdownDate -now ;
 
      let days = Math.floor(distance / (1000 * 60 * 60 * 24));
      let hours = Math.floor((distance % (1000 * 60 *60 *24) / (1000 *60 * 60)));
      let minutes = Math.floor((distance % (1000 *60 *60)) / (1000 *60));
      let seconds = Math.floor((distance % (1000 * 60)) / 1000);


      if (distance < 0 ) {
        clearInterval(interval)
      } else {
        setTimerDays(days);
        console.log(days)
        setTimerHours(hours)
        setTimerMinutes(minutes)
        setTimerSeconds(seconds)
      }

    } ,1000);

  }

  useEffect( () => {
    startTimer()

 }, [])


  return (
    <div className="timer-container" style={{backgroundImage: `url(${Background})`}}>
      <section className="container" >
        <section className='Headings'>
          <div className='H1'> "Offer of the Deacade" </div>
          <div className='H2'> "Save 90%"  </div>
          <div className='H3'> "Only for today!" </div>
        </section>
        <section className="Timer">
            <div className='Days'>
              <p>{timerDays}</p>
              <p><small>Days</small></p>
            </div>
            <div className='Hours'>
              <p>{timerHours}</p>
              <p><small>Hours</small></p>
            </div>
            <div className='Minutes'>
              <p>{timerMinutes}</p>
              <p><small>Minutes</small></p>
            </div>
            <div className='Seconds'>
              <p>{timerSeconds}</p>
              <p><small>Seconds</small></p>
            </div>

        </section>

      </section>

    </div>
  );
}

export default Timer;