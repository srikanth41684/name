import React from 'react';
import logoimage from './asserts/logo.png';
import image1 from './asserts/1.png';
import image2 from './asserts/2.png';
import image3 from './asserts/3.png';

import "./style.css";

const App = () => {
  return (
    <div>
      <div className='logo'>
        <img src={logoimage} alt='logo-image' />
      </div>
      
      <section>
        <div className='section1'>

          <div className='award-image'>
            <img src={image1} alt='image1' />
          </div>

          <div className='section1-leftpart'>
            <h3>C.R.I. PUMPS WINS THE NATIONAL ENERGY CONSERVATION AWARD 2018 for the 4th time.</h3>
            <ul>
              <li>C.R.I.'s energy efficient products are well recognized by various Government Institutions, as trustworthy products for various projects across the globe to save energy.</li>
              <li>C.R.I. is the highest contributor in the country for the projects of EESL (Energy Efficiency Services Limited) to replace the old inefficient pumps with 5 Star rated energy efficient smart pumps with IoT enabled control panel.</li>
            </ul>
            <img src={image2} alt='image2' />
            <p>Government of India has awarded the <strong>"National Energy Conservation Award 2018"</strong>. Mr. G. Selvaraj, Joint Managing Director of C.R.I. Group received the award from Smt. Sumitra Mahajan, Speaker of Lok Sabha & Shri. Raj Kumar Singh, Honorable Minister of State.</p>
          </div>

        </div>

        <div className='section2'>
          <p className='para1'>INSTALLED OVER 10 LAKHS STAR RATED PUMPSETS ACROSS THE COUNTRY RESULTING IN A CUMULATIVE SAVING OF MORE THAN 9,000 MILLION UNITS OF POWER FOR THE NATION.</p>
          <img src={image3} alt='image3' />
          <p className='para2'>Valves - Pumps - Pipes - IoT Drives & Controllers - Wires & Cables - Solar Systems - Motors</p>
        </div>

        <hr className='hr-line' />

        <div className='section3'>
          <h3>C.R.I. FLUID SYSTEMS PRODUCTS CATER TO DIVERSE SEGMENTS</h3>
          <div className='line-cut'>
            <div>CHEMICALS & PROCESS</div>
            <div>POWER</div>
            <div>WATER & WASTE WATER</div>
            <div>OILS & GAS</div>
            <div>PHARMA</div>
            <div>SUGARS & DISTILLERIES</div>
            <div>PAPER & PULP</div>
            <div>MARINE & DEFENCE</div>
            <div>METAL & MINING</div>
            <div>FOOD & BEVERAGE</div>
            <div>PETROCHEMICAL & REFINERIES</div>
            <div>SOLAR</div>
            <div>BUILDING</div>
            <div>HVAC</div>
            <div>FIRE</div>
            <div>FIGHTING</div>
            <div className='border'>AGRICULTURE & RESIDENTIAL</div>
          </div>
        </div>

        <div className='section4'>
          <div>
          <i className="fa-solid fa-phone"></i> <span>Toll Free <b>1800 200 4123</b> </span>
          </div>

          <div>
            <i className="fa-brands fa-facebook"></i> <a href='#'>www.facebook.com/cripumps</a>
          </div>

          <div>
          <i className="fa-brands fa-google"></i> <a href='#'>crigroup.com</a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default App;