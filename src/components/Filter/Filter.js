import { useSelector, useDispatch } from 'react-redux';
import { getFilter } from '../../redux/selectors';
import * as actions from '../../redux/actions';

const Filter = () => {
  const value = useSelector(getFilter);
  const dispatch = useDispatch();
  const change = e => dispatch(actions.changeFilter(e.target.value));
  return (
    <label>
      Find contacts by name
      <input type="text" value={value} onChange={change} />
    </label>
  );
};

export default Filter;
