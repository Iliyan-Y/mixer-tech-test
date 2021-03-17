import React, { useState, useEffect } from 'react';
import { API } from 'aws-amplify';
import { listSavess } from '../graphql/queries';
import {
  createSaves as createSaveMutation,
  deleteSaves as deleteSaveMutation,
} from '../graphql/mutations';

const initialFormState = { name: '', description: '', link: '' };

const Crud = () => {
  const [notes, setNotes] = useState([]);
  const [formData, setFormData] = useState(initialFormState);

  useEffect(() => {
    fetchNotes();
  }, []);

  async function fetchNotes() {
    const apiData = await API.graphql({ query: listSavess });
    console.log(apiData);
    setNotes(apiData.data.listSavess.items);
  }

  async function createNote() {
    if (!formData.name || !formData.description) return;
    await API.graphql({
      query: createSaveMutation,
      variables: { input: formData },
    });
    setNotes([...notes, formData]);
    setFormData(initialFormState);
  }

  async function deleteNote({ id }) {
    const newNotesArray = notes.filter((note) => note.id !== id);
    setNotes(newNotesArray);
    await API.graphql({
      query: deleteSaveMutation,
      variables: { input: { id } },
    });
  }

  return (
    <div>
      <h3>Saved links</h3>
      <input
        onChange={(e) => setFormData({ ...formData, 'name': e.target.value })}
        placeholder="Link Name"
        value={formData.name}
      />
      <input
        onChange={(e) =>
          setFormData({ ...formData, 'description': e.target.value })
        }
        placeholder="Description"
        value={formData.description}
      />
      <input
        onChange={(e) => setFormData({ ...formData, 'link': e.target.value })}
        placeholder="Link"
        value={formData.link}
      />
      <button onClick={createNote}>Create Note</button>
      <div style={{ marginBottom: 30 }}>
        {notes.map((note) => (
          <div key={note.id || note.name}>
            <a href={note.link}>{note.name}</a>
            <p>{note.description}</p>
            <button onClick={() => deleteNote(note)}>Delete note</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Crud;
