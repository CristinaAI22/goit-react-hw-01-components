import css from './Profile.module.css';
import PropTypes from 'prop-types';
import { Title } from 'common/Title';

export const Profile = ({ title, username, tag, location, avatar, stats }) => {
  const { followers, views, likes } = stats;
  return (
    <div className={css.profile}>
      {title && <Title text={title} />}
      <div className={css.description}>
        <img
          className={css.avatar}
          src="https://cdn-icons-png.flaticon.com/512/2922/2922506.png"
          alt="User avatar"
        />
        <p className={css.name}>{username}</p>
        <p className={css.tag}>@{tag}</p>
        <p className={css.location}>{location}</p>
      </div>

      <ul className={css.stats}>
        <li>
          <span className={css.label}>Followers</span>
          <span className={css.quantity}>{followers}</span>
        </li>
        <li>
          <span className={css.label}>Views</span>
          <span className={css.quantity}>{views}</span>
        </li>
        <li>
          <span className={css.label}>Likes</span>
          <span className={css.quantity}>{likes}</span>
        </li>
      </ul>
    </div>
  );
};
Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string,
  location: PropTypes.string,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.object,
};
