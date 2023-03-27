function ProfileCard({ title, handle, src,description }) {

    return (
            <div className="card" >
                <div className="card-image">
                    <figure className="image is-3by3">
                    <img src={src} alt="pda logo"></img>
                    </figure>
                </div>
                <div className="media-content">
                    <p className="title is-4">{title}</p>
                    <p className="subtitle is-6">{handle}</p>
                    <p className="subtitle is-6">{description}</p>
                </div>
            </div>
            
        
    );
}

export default ProfileCard;