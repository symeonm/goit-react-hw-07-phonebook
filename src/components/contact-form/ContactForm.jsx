import { nanoid } from 'nanoid';
import { useDispatch } from 'react-redux';
import { addContact } from 'redux/contactSlice';
import { useSelector } from 'react-redux';

export default function FormAdd() {
  const dispatch = useDispatch();
  const contact = useSelector(state => state.contacts.contact);

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;

    const nameContact = contact.find(
      obj =>
        obj.nameValue.toLowerCase() === form.elements.name.value.toLowerCase()
    );

    if (!nameContact) {
      dispatch(
        addContact({
          nameValue: form.elements.name.value,
          numberValue: form.elements.number.value,
          idValue: nanoid(),
        })
      );
      reset(form);
      return;
    } else {
      alert('Такий контакт вже існує');
    }
  };

  const reset = form => {
    form.elements.name.value = '';
    form.elements.number.value = '';
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>
      <label>
        Number
        <input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>
      <button type="submit">Add contact</button>
    </form>
  );
}
