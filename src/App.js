import ProfileCard from "./ProfileCard" 
function App(){
    return (
        <div>
            <h1>Personal Digital Assistants</h1>
            <div>
                <ProfileCard title="Alexa" handle="@alexa01" />
                <ProfileCard title="Cortana" handle="@cortana32" />
                <ProfileCard title="Siri" handle="@siri01" />
            </div>
            
            
        </div>
        
    )
};
export default App;