import '../styles/About.css';
import committedHelp from '../assets/committed-help.png'
import threeDots from '../assets/three-dots-blue-20979.png'

function About() {

  return (
    <div className='About'>
        <div className='cardAndDots'>
            <div className='cardContainer'>
                <div className='card'>
                    <span>
                        Health Insurance
                    </span>
                </div>
                <div className='card'>
                    <span>
                        Medicare supplement
                    </span>
                </div>
                <div className='card cardDesktop'>
                    <span>
                        Medicare Advantage
                    </span>
                </div>
                <div className='card cardDesktop'>
                    <span>
                        Life Insurance
                    </span>
                </div>
                <div className='card cardDesktop'>
                    <span>
                        ACA Obamacare
                    </span>
                </div>
            </div>
            <img src={threeDots} className='threeDots'/>
        </div>


        <div className='imgContainer'>
            <img src={committedHelp} alt="Committed help image" />
        </div>

        <div className='aboutText'>
            <div className='aboutTitle'>Commited to help you find the right plan</div>
            <div className='desc'>Insurance is an important financial tool that can help you protect yourself and your loved ones from financial losses in the event of an unexpected event. It is important to consider your individual needs and circumstances when choosing the right insurance coverage for you and your family.</div>
            <button className='aboutBtn'>ABOUT INSURELLA</button>
            <div className='benefitSection'>
                <div className='benefitCard'>
                    <div>
                        Save Money
                    </div>
                    <div>
                        Compare Plans
                    </div>
                </div>
                <div className='benefitCard'>Licensed Agents</div>
            </div>
        </div>
    </div>
  )
}

export default About