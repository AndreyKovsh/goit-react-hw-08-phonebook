import { useDispatch, useSelector } from 'react-redux';
import { authSelectors, authOperations } from '../../redux/auth';

const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
    marginRight: 25,
  },
  name: {
    fontWeight: 700,
    marginRight: 15,
    color: 'rgb(10, 210, 10)',
  },
  button: {
    fontSize: 20,
    fontWeight: 700,
    borderRadius: 5,
    padding: 10,
    backgroundColor: 'white',
  },
};

export default function UserMenu() {
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.getUserName);

  return (
    <div style={styles.container}>
      <span style={styles.name}>Welcome, {name}</span>
      <button
        type="button"
        style={styles.button}
        onClick={() => dispatch(authOperations.logOut())}
      >
        Log out
      </button>
    </div>
  );
}
