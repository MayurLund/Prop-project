import ProfileCard from "./ProfileCard" 
import AlexaImage from "./images/alexa.png"
import CortanaImage from "./images/cortana.png"
import SiriImage from "./images/siri.png"
function App(){
    return (
        <div>
            
        <section className="hero is-primary">
        <div className="hero-body">
          <p className="title">
          Personal Digital Assistants
          </p>
        </div>
      </section>

        <div className="container">
            <div className="section">
            <div className="columns">
            <div className="column">
                <ProfileCard title="Alexa" handle="@alexa01" src={AlexaImage} description="Alexa is built by amazon and let you do more with just saying Alexa" />
            </div>
            <div className="column">
                <ProfileCard title="Cortana" handle="@cortana32" src={CortanaImage} description="Cortana is built by microsoft and we dont use it very often"/>
            </div>
            <div className="column">
                <ProfileCard title="Siri" handle="@siri01" src={SiriImage} description="Siri is built by Apple and seems like its dead by now"/>
            </div>
            </div>
            </div>
        </div>
        </div>
        
    )
};
export default App;