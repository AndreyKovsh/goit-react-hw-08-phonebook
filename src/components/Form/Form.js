import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getContacts } from '../../redux/selectors';
import { addContact } from '../../redux/operations';
import { toast } from 'react-toastify';

function Form() {
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChange = e => {
    const { name, value } = e.target;

    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  };

  const checkRepeatName = name => {
    return contacts.find(
      contact =>
        contact.name && contact.name.toLowerCase() === name.toLowerCase(),
    );
  };

  const checkRepeatNumber = number => {
    return contacts.find(contact => contact.number === number);
  };

  const checkEmptyQuery = (name, number) => {
    return name.trim() === '' || number.trim() === '';
  };

  const checkValidNumber = number => {
    return !/\d{3}[-]\d{2}[-]\d{2}/g.test(number);
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (checkRepeatName(name)) {
      toast(`${name} is already in use`);
    } else if (checkRepeatNumber(number)) {
      toast(` ${number} is already in use`);
    } else if (checkEmptyQuery(name, number)) {
      toast.info(' Enter the correct name and number');
    } else if (checkValidNumber(number)) {
      toast.error(' Enter the correct phone number');
    } else {
      dispatch(addContact(name, number));
    }
    resetInput();
  };

  const resetInput = () => {
    setName('');
    setNumber('');
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Name
            <input
              type="text"
              name="name"
              value={name}
              onChange={handleChange}
              placeholder="Andrey Kovsh"
            />
          </label>
          <label>
            Phone number
            <input
              type="text"
              name="number"
              value={number}
              onChange={handleChange}
              placeholder="817-18-41"
            />
          </label>
          <button type="submit">Add contact</button>
        </div>
      </form>
    </>
  );
}
export default Form;
