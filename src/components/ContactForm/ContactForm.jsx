import React from 'react';
import styled from 'styled-components';
import tw, { css } from 'twin.macro';
import emailjs from '@emailjs/browser';
import BeatLoader from 'react-spinners/BeatLoader';

const Section = styled.section`
  background-color: #2a2a2a;
  width: 100%;
`;

const Container = styled.div`
  ${tw`
    p-6
    lg:px-32
    lg:py-12
  `}
`;

const Heading = styled.h2`
  ${tw`
    text-white
    text-2xl
    lg:text-3xl
    font-bold
    uppercase
    text-center
    mb-8
  `}
`;

const Form = styled.form`
  border-top: 1px solid rgba(255, 255, 255, 0.5);
  ${tw`
  p-4
  md:p-6
  rounded-lg
  bg-white/10
  grid
  gap-4
  `}
`;

const Group = styled.div`
  ${tw`
    flex
    flex-col
  `}
`;

const Label = styled.label`
  ${tw`
    text-white
    text-xl
  `}
`;

const Input = styled.input`
  border-radius: .25rem;
  ${tw`
    mt-1
    p-2
    text-white
    bg-white/25
    focus:outline-none
    focus:ring
    focus:ring-yellow-500
  `}
`;

const Textarea = styled.textarea`
  border-radius: .25rem;
  ${tw`
    mt-1
    p-2
    text-white
    bg-white/25
    focus:outline-none
    focus:ring
    focus:ring-yellow-500
  `}
`;

const Message = styled.p`
  ${tw`
    text-yellow-400
    text-center
  `}
`;

const Loader = css`
  justify-self: center;
`;

const SubmitButton = styled.button`
  width: 100px;
  border: 1px solid white;
  ${tw`
    bg-transparent
    text-white
    p-2
    rounded-3xl
    justify-self-center
    hover:text-black
    hover:border-black
    hover:bg-yellow-400
    hover:shadow-lg
    transition
    duration-200
  `}
`;

function ContactForm() {
  const form = React.useRef();
  const [loading, setLoading] = React.useState(false);
  const [message, setMessage] = React.useState(null);

  const sendEmail = React.useCallback(async (evt) => {
    evt.preventDefault();
    setLoading(true);
    
    try {
      const res = await emailjs.sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_EMAILJS_PUB_KEY,
      );
      console.log(res.text);
      setMessage('👍 Message sent. Thank you for contacting!');
    } catch (err) {
      console.log(err);
      setMessage('🤯 Something went wrong. Please try again.');
    }

    setLoading(false);
  }, [form]);

  return (
    <Section id="contact">
      <Container>
        <Heading>Contact Me</Heading>
        <Form ref={form} onSubmit={sendEmail}>
          <Group>
            <Label htmlFor="name">Name</Label>
            <Input id="name" name="name" placeholder="Name" required />
          </Group>
          <Group>
            <Label htmlFor="email">Email</Label>
            <Input id="email" name="email" placeholder="Email" required />
          </Group>
          <Group>
            <Label htmlFor="message">Message</Label>
            <Textarea id="message" name="message" placeholder="Message" rows="5" required />
          </Group>
          {loading && <BeatLoader color="#facc15" css={Loader} size={10} />}
          {message && <Message>{message}</Message>}
          <SubmitButton type="submit">Submit</SubmitButton>
        </Form>
      </Container>
    </Section>
  );
}

export default ContactForm;
