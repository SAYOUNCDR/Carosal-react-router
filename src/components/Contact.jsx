import { Mail, Phone, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-12 text-center text-gray-900">
        Get in Touch
      </h1>

      <div className="grid md:grid-cols-2 gap-12">
        <div className="space-y-8">
          <h3 className="text-2xl font-bold mb-4">Contact Info</h3>
          <div className="flex items-center gap-4 text-gray-600">
            <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-900">
              <Mail className="w-5 h-5" />
            </div>
            <span>hello@caasosal.com</span>
          </div>
          <div className="flex items-center gap-4 text-gray-600">
            <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-900">
              <Phone className="w-5 h-5" />
            </div>
            <span>+1 (555) 123-4567</span>
          </div>
          <div className="flex items-center gap-4 text-gray-600">
            <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-900">
              <MapPin className="w-5 h-5" />
            </div>
            <span>123 Design District, Creative City</span>
          </div>
        </div>

        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Name
            </label>
            <input
              type="text"
              className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-black/5"
              placeholder="Your name"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-black/5"
              placeholder="your@email.com"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Message
            </label>
            <textarea
              className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-black/5 h-32"
              placeholder="How can we help?"
            ></textarea>
          </div>
          <button className="w-full py-3 bg-black text-white rounded-lg font-bold hover:bg-gray-800 transition-colors">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
