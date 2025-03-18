import css from './Profile.module.css';

// { name, tag, location, image, stats }

const Profile = () => {
  return (
    <div className={css.profile}>
      <div className={css.card}>
        <img
          className={css.image}
          src="https://cdn-icons-png.flaticon.com/512/1077/1077012.png"
          alt="User avatar"
        />
        <p className={css.name}>Petra Marica</p>
        <p className={css.tag}>@pmarica</p>
        <p className={css.location}>Salvador, Brasil</p>
      </div>

      <ul className={css.stats}>
        <li>
          <span>Followers</span>
          <span className={css.number}>1000</span>
        </li>
        <li>
          <span>Views</span>
          <span className={css.number}>2000</span>
        </li>
        <li>
          <span>Likes</span>
          <span className={css.number}>3000</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;
