import profilePic from './assets/file.png'

function Card() {
    return (
        <div className="card">
            <img className='card-image' src={profilePic} alt="profile picture" />
            <h2 className='card-title'>Igor Calbo</h2>
            <p className='card-text'>I dont make Youtube videos and play video games</p>
        </div>
    );
}

export default Card