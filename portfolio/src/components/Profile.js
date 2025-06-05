import './Profile.css';
import myphotos from '../assets/mu.jpg';

function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-left">
        <img src={myphotos} alt="Profile" />
      </div>
      <div className="profile-right">
        <h2>Jauthin Kushalappa P.M</h2>
        <p className="title">Engineering Mind, Athletic Spirit (MERN)</p>
        <ul className="bio">
          <li>Pursuing B.E. in Information Science and Engineering (ISE)</li>
          <li>Strong interest in technology and problem-solving</li>
          <li>Athlete with discipline, focus, and teamwork skills</li>
          <li>Proud Kodava with a unique cultural perspective</li>
          <li>Committed, hardworking, and team-oriented</li>
        </ul>
      </div>
    </div>
  );
}

export default Profile;
