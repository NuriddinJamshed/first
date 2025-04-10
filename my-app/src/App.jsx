import React from 'react'

import './App.css'

const App = () => {
  return (
    <div className='container'>
      <div className='nav'>
        <h1 className='logo'>Cootels</h1>
        <div className='menu'>
          <a href="#">Rooms</a>
          <a href="#">Reservation</a>
          <a href="#">Contacs</a>
        </div>
        <button className='btnGet'>Get Started</button>
      </div>
      <div className='main'>
        <div className='section-1'>
          <div className='left'>
            <h1 className='title'>Nature, Warmth, and Beauty in One Space</h1>
            <p className='description'>One place to release all the stress, bring back happines, and get back to nature. We provide the best room and nature for you. Come visit us anytime you want.</p>
            <button className='btnReserve'>Reservation</button>
          </div>
          <img className='imgSec-1' src="/img/image(1).png" alt="Foto" />
        </div>
        <div className='section-1'>
          <img className='imgSec-2' src="https://s3-alpha-sig.figma.com/img/183e/87b1/87ab51372ffd3d0105bff1e6f280fd1c?Expires=1744588800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=qxrbzMnS7YZpjnHCx9~ljwWIVdtNygyaRxM3TFbKiH3WmEhpqfWcTT3vsUrLi4M3OOjytikTUOp4RXnGcVRGg4q23TBOzBL3DBm8kcz4s-3av6txgfcF3lgsWhkFSzToHLMe~quIzDNwhGmh98cW3DFSXpx8yej9pMb8QeyI4hg5IVuLTZnlqRvQpWYMQ8TccpEADzZ~aEZj3oYuZhsvwRKbA6xB1kVzDR5Jk~32yVy9-biCDnCRmhFBB-cyHwTkCj-83bj05iVTtxczaKu~NeNtq-cjwJriTmYQy6wXNpmSxDO72f8E5gzzmucG1Idgynv82G08xWXNm8OodnQIQg__" alt="Foto" />
          <div className='right'>
            <h1 className='title'>Cozy and Down to Earth Cootage Hotel in Norway.</h1>
            <p className='description'>Our Cootage Hotel is an intimate hideway concieved for dicerning travelers. It faces directly the unique and spectacular panorama of the Hallerbos Jungle.  <br /><br />
            Cootels extends along a private, quiet, and beautiful nature. Stay away from crowd and enjoy the cozy and beauty with us.
            </p>
            <button className='btnLearn'>Learn More</button>
          </div>
        </div>
        <div className='section-2'>
          <div className='leftSec-3'>
            <h1 className='title'>Cabin Activities</h1>
            <p className='description'>Don’t worry to get bored easily in our cabin. We have so many cabin activities for you to do it alone or with group. Maybe this is the best chance for you to make new friends or even a lover.
            </p>
          </div>
          <img className='imgSec-2' src="/img/image (25).png" alt="Foto" />
        </div>
        <div className='section-2'>
          <img className='imgSec-2' src="/img/image 18.png" alt="Foto" />
          <div className='leftSec-3'>
            <h1 className='title'>100% Organic Food</h1>
            <p className='description'>We served 100% organic, low process and delicious food. We allow our guest to have breakfast or dinner request.What ever made your taste buds happy.
            </p>
          </div>
        </div>
      </div>
      <div className='rooms'>
        <h1 className='title'>Many Rooms to Choose</h1>
        <p className='description descriptionSec-5'>There is a room for every needs. We have room for individuals until family size, we also have a cabin for more private experience</p>
        <button className='btnGet'>Explore more</button>
        <div className='box'>
          <div className='card'>
            <img src="https://s3-alpha-sig.figma.com/img/8082/7c6b/1d88aa174d018be72d57eee44f73eb60?Expires=1744588800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=PL0kBfm~RCFEL8t~2S00W4cf4gb4Q4DwwgDl4B~6grnowlGrI61kAvwuthu8Qx7M~oA37wZDUroE3mkSUWP97oo2CoOwV9MsZg-~nHlFv~kIuRpLZ8gSNEwgrcQPK5c-kJHfgrVYdhMIAvFrZjoHuiPVPW-7ZLJiiMuCSvJkbH~2qvCvO7JuXJLDi1daICdLxaYQGK60M30o1LIH9telRq~uWRdXivIUvtmllLbISGDuT8t~po2ngjD~TMDxZJRIHIgZ89HlYQUvcIlgNumGlumvod~5CUtN1a9T6TM~3Be25ooJjpNCarLUJUYKoj1BZ9g~094eKtLG6pBG89B1yQ__" alt="" />
            <div info>
              <h2>Single Room</h2>
              <p className='description'>Best for a brave lone wolf who need comfort and quiet quality time, but you still have a chance to meet others.</p>
              <button className='btnArrow'>Learn more <span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6"><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" /></svg></span></button>
            </div>
          </div>
          <div className='card'>
            <img src="https://s3-alpha-sig.figma.com/img/b0e0/7c42/e25f5a9a190207c7d02b36095d27734e?Expires=1744588800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=JuRjdxo4wNZbGi3lUKrkNCwMxSM5GaPUBPLj3eU95smCoy3OV2yyoHd~7lBvz8r41qLPufxNP2Xat30kdSB-vkCJOU8f0sRGOBEn6O9fft48twvL~~~o1b3bDz9QVbLFOnTJ-l~nXUxz13ZdtCcBs~X-MElo3CyU5VzrLdS5oDAY9jBeWAVHKuGHznk5YEqW5HoRGOkiUmyVG7zcFBaEQKczMCfNjUx~bikadTpkrVjSCbVrLYkRb7SrBaeh9ODBk8UVAhFQS0DgGA4tCd7p7lPV-Ztq7pHLb2DdKs2SG2mebsZi2RaqxICFwhDTW9OlNRJ911v2I06jnFPXwpL1DA__" alt="" />
            <div info>
              <h2>Double Room</h2>
              <p className='description'>Best for couple, seek happiness in intimacy without worry of being disturbed. Feel the whole world just for you two</p>
              <button className='btnArrow'>Learn more <span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6"><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" /></svg></span></button>
            </div>
          </div>
          <div className='card'>
            <img src="https://s3-alpha-sig.figma.com/img/259a/fced/a2e397b894674b820b693f5a2d87eef5?Expires=1744588800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=mDcsZ7ShEBsa-JOmHoFTlVR19Bs-sBCtIpJeRCUNhAORDcmxfnAV4PdcHMhG7gVwHy7-Wv0epYs8QHs~P1EAWOS0a8ig7Eim-7iiywSYRoTyMXBJFj~pj2SeDaaq9Sje0VMMHvV7-rupkC8t7hppd3~0RQScPSgbsPhwmEpEn8K0qHnTI9RUu34jyQ4o3FNy801HHLAyT-zru8qRc~yX8O5zJtuFo3nTG-urA5Mpcx7bqbHmydbMTwvAtnfAFnx2BHeKoPpH23Sa1G~0MYIBx6DK2F7uozAf8vPlQ4GgCkHWNyqMeh4f~0To7V3jzCksP0BbeC8lZLyKYm8p6WX~eg__" alt="" />
            <div info>
              <h2>Cootage</h2>
              <p className='description'>Best for family or group. One cootage can fit up to 5 people. Made stronger bond with your family or friends</p>
              <button className='btnArrow'>Learn more <span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6"><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" /></svg></span></button>
            </div>
          </div>
        </div>
      </div>
      <div className='getRoom'>
        <div className='left-sec5'>
          <p>Start your journey!</p>
          <h1 className='title'>How to Get My Room?</h1>
          <p className='description'>You can contact us by phone or email us. Easily tap the contact button below and it will take you to our contact point</p>
          <div className='btnLine'>
            <button className='btnLearn'>Contact us</button>
            <button className='btnArrow'>Explore more room</button>
          </div>
        </div>
        <div className='right-sec5'>
          <div className='first'>
            <h2>1. Choose a room and date</h2>
            <span className='icon'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6"><path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" /></svg></span>
          </div>
          <div className='first'>
            <h2 className='text'>2. Check for room availability</h2>
            <span className='icon-svg'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6"><path strokeLinecap="round" strokeLinejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5" /></svg></span>
            <p className='description'>Contact us via phone or email, ask for availability of you choice of room. We might offer you something exciting.</p>
          </div>
          <div className='first'>
            <h2>3. Enjoy your room</h2>
            <span className='icon'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6"><path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" /></svg></span>
          </div>
        </div>
      </div>
      <div className='cart'>
        <h1 className='title'>Hear From Our Happy Customers</h1>
        <img className='img-user' src="https://s3-alpha-sig.figma.com/img/da4a/a7ef/effc7f959dbb91e13f4cf6683ea80eb3?Expires=1744588800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=Za2zq2Pn7wFreim8aQ3Ir7Rk7RUFwUjHFI-LqXLrMCWeHRCbryaFvB~P4-AIWArdE8FmUgzF5KGslnWeeCgE53~qHFyjlQCXca-YUPPaNi~pnkIP2FatKFKvKmPCX4s6oReQrgXUSkvG-ZSbnYv1~6X0SPqxFWURjpPGUr6~d2JXxSCFOhnOEnydfr6h97a~j75jIiYM48Mn2s80KZi4l6j7~-DtYjE-O6Y2E0vE-LukUxOsNzyr6knytr8H1bK8TSjo-lalsOqrxzu5GtvJIdSORF7KM1Zu2ci4iQ~6uvaM9zrp2pXxdF3vuYxToAEzvjeEXmr~LIp3npIofVPJUQ__" alt="" />
        <p className='description'>“Great service, great food, great people. The scenery is also beautiful, you can do so much activity even with your famility. Worth every penny! you should come and see for your self.  5 out of 5! the waffle is great!”</p>
        <h3>Kirana Dunham</h3>
        <div className='slider'>
          <i className='not-select'></i>
          <i className='not-select'></i>
          <i className='selected'></i>
          <i className='not-select'></i>
          <i className='not-select'></i>
        </div>
      </div>
      <div className='footer'>
          <div className='left-foot'>
            <h1>Cootels</h1>
            <p>Your Best Private</p> 
            <p>Hideway From Crowd. </p> 
            <p>Back to Nature.</p>
            <div className='icons'>
              <img src="img/Group (4).png" alt="" />
              <img src="img/Group (5).png" alt="" />
              <img src="img/Vector (3).png" alt="" />
            </div>
          </div>
          <div className='right-foot'>
            <div className='div'>
              <h2>Rooms</h2>
              <p>Single Room</p>
              <p>Double Room</p>
              <p>Cabin</p>
              <p>Custom Room</p>
            </div>
            <div className='div'>
              <h2>Reservation</h2>
              <p>See the Steps</p>
              <p>Best Time</p>
            </div>
            <div className='div'>
              <h2>Contact</h2>
              <p>Our Number</p>
              <p>Our Email</p>
              <p>Our Location</p>
            </div>
          </div>
      </div>
    </div>
  )
}

export default App