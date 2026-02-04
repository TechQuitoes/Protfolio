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
  return (
    <section
      id="contact"
      className="relative min-h-screen w-full overflow-hidden  text-white"
    >
      {/* Glow */}
      {/* <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-[-20%] h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-purple-600/30 blur-[160px]" />
        <div className="absolute right-[10%] top-[30%] h-[500px] w-[500px] rounded-full bg-indigo-600/30 blur-[160px]" />
      </div> */}

      <div className="relative mx-auto max-w-7xl px-6 py-20">
        {/* Heading */}
        <div className="mb-16 text-center">
          <h2 className="bg-gradient-to-r from-indigo-300 to-purple-400 bg-clip-text text-4xl font-bold text-transparent md:text-5xl">
            Get In Touch
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-gray-300">
            Ready to start your next project? Let&apos;s discuss how we can help
            bring your vision to life.
          </p>
        </div>

        <div className="grid gap-10 md:grid-cols-2">
          {/* Left */}
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

          {/* Right */}
          <div className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
            <h3 className="mb-6 text-xl font-semibold">Send us a Message</h3>

            <form className="space-y-5">
              <InputField label="Your Name" placeholder="Enter your name" />
              <InputField
                label="Email Address"
                type="email"
                placeholder="Enter your email"
              />
              <TextareaField
                label="Project Details"
                placeholder="Tell us about your project..."
              />

              <Button type="submit">
                Send Message<PaperAirplaneIcon className="h-5 w-5" />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
