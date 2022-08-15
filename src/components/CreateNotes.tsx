import { useRef } from 'react';
import { Note } from '../models/note.model';
import { Button, Form } from 'react-bootstrap';

interface ICreateNotesProps {
    notes: Note[],
    setNotes: React.Dispatch<React.SetStateAction<Note[]>>
}

const CreateNotes: React.FunctionComponent<ICreateNotesProps> = ({notes, setNotes}) => {
    const titleRef = useRef<HTMLInputElement | null>(null);
    const textRef = useRef<HTMLTextAreaElement | null>(null);
    const colorRef = useRef<HTMLInputElement | null>(null);

    return (
        <>
            <h2>Create Notes</h2>
            <Form className="mt-3 mb-3">
                <Form.Group className='mb-3' controlId='formBasic'>
                    <Form.Label>Title</Form.Label>
                    <Form.Control type='text' placeholder='Enter Title for the Note' ref={ titleRef }/>
                </Form.Group>
                <Form.Group className='mb-3' controlId='formBasicText'>
                    <Form.Label>Text</Form.Label>
                    <Form.Control placeholder='Enter your notes' as='textarea' rows={3} ref={ textRef }/>
                </Form.Group>
                <Form.Group className='mb-3'>
                    <Form.Label htmlFor='colorInput'>Notes Color</Form.Label>
                    <Form.Control type='color' id='colorInput' defaultValue="#dfdfdf" title='Choose your color' ref={ colorRef }/>
                </Form.Group>
                <Button type='submit' variant='primary'>Submit</Button>
            </Form>
        </>
    )
    ;
};

export default CreateNotes;
