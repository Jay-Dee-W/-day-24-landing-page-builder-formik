import './HomePage.css'

export default function HomePage() {

    return (
        <div className='Form-container'>
           < div className='Form'>
               <h4> Build Your Landing Page</h4>
               <div className='Main-Headline'>
                   <h6>Main Headline</h6>
                   <input type='text' />
               </div>
               <div className='Secondary-Headline'>
                   <h6>Secondary Headline</h6>
                   <input type='text' />
               </div>
               <div className='Subtext'>
                   <h6>Subext</h6>
                   <input type='text' />
               </div>
               <div className='Button-Text'>
                   <h6>Button Text</h6>
                   <input type='text' />
               </div>
               <div className='Date-Time'>
                   <h6>When will promo end?</h6>
                   <input type="datetime-local" />
               </div>
               <div>
                    <div className='background-picker'>
                        <input type='radio' id='1' className="bg1" name='background' />
                        <label htmlFor="1"><img src="background1.jpg" alt='' width='50' height='50'/></label>
                        <input type='radio' id='2' className="bg2" name='background' />
                        <label htmlFor="2"><img src="background2.jpg" alt='' width='50' height='50'/></label>
                    </div>
                    <button>Start Timer</button>
               </div>
           </div>
        </div>
    )
}