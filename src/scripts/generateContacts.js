import { createFakeContact } from '../utils/createFakeContact.js';
import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

const generateContacts = async (number) => {
  const contactList = await readContacts();
  const newContacts = Array(number).fill(0).map(createFakeContact);
  const finalContactsList = [...contactList, ...newContacts];
  await writeContacts(finalContactsList);
};

generateContacts(5);