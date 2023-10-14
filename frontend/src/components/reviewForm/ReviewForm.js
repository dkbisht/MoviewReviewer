import {Form,Button} from 'react-bootstrap';

const ReviewForm = ({handleSubmit,revText,labelText,defaultValue}) => {
  return (

    <form ref={revText} onSubmit={handleSubmit} className='"mb-3'>
      {labelText}<br/>
          <textarea name="message" rows="3" cols={50} placeholder='Add Reviews' required></textarea>
          <br></br>
        <button type='submit' className='btn btn-primary'>SUBMIT</button>
     </form>
    // <Form>
    //     <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
    //         <Form.Label>{labelText}</Form.Label>
    //         <Form.Control ref={revText} as="textarea" rows={3} defaultValue={defaultValue} required />
    //     </Form.Group>
    //     <Button variant="outline-info" onClick={handleSubmit}>Submit</Button>
    // </Form>   

  )
}

export default ReviewForm