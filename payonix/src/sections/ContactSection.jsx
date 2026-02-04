import { useRef } from "react";
import emailjs from "@emailjs/browser";
import {
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon,
  PaperAirplaneIcon,
} from "@heroicons/react/24/outline";
import InfoCard from "../components/ui/InfoCard";
import InputField from "../components/ui/InputField";
import TextareaField from "../components/ui/TextareaField";
import Button from "../components/ui/Button";

const ContactSection = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

  
        emailjs.sendForm(
      process.env.REACT_APP_EMAILJS_SERVICE_ID,
      process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
      form.current,
      process.env.REACT_APP_EMAILJS_PUBLIC_KEY
)
      .then(
        () => {
          alert("Message sent successfully 🚀");
          form.current.reset();
        },
        (error) => {
          alert("Failed to send message 😢");
          console.log(error);
        }
      );
  };

  return (
    <section
      id="contact"
      className="relative min-h-screen w-full overflow-hidden text-white"
    >
      <div className="relative mx-auto max-w-7xl px-6 py-20">
        <div className="mb-16 text-center">
          <h2 className="bg-gradient-to-r from-indigo-300 to-purple-400 bg-clip-text text-4xl font-bold text-transparent md:text-5xl">
            Get In Touch
          </h2>
        </div>

        <div className="grid gap-10 md:grid-cols-2">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Let&apos;s Start a Conversation
            </h3>

            <div className="space-y-4">
              <InfoCard
                icon={<PhoneIcon className="h-6 w-6 text-white" />}
                title="Phone"
                value="+91-8116940333"
              />
              <InfoCard
                icon={<EnvelopeIcon className="h-6 w-6 text-white" />}
                title="Email"
                value="payonixtechnology@gmail.com"
              />
              <InfoCard
                icon={<MapPinIcon className="h-6 w-6 text-white" />}
                title="Location"
                value="Near Saket Metro Station, New Delhi, India, 110030"
              />
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
            <h3 className="mb-6 text-xl font-semibold">Send us a Message</h3>

            <form ref={form} onSubmit={sendEmail} className="space-y-5">
              <InputField name="user_name" label="Your Name" placeholder="Enter your name" />
              <InputField
                name="user_email"
                label="Email Address"
                type="email"
                placeholder="Enter your email"
              />
              <TextareaField
                name="message"
                label="Project Details"
                placeholder="Tell us about your project..."
              />

              <Button type="submit">
                Send Message <PaperAirplaneIcon className="h-5 w-5" />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
