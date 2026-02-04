import { useState } from "react";
import { Search, Plus, Minus, CircleHelp } from "lucide-react";
import { categories, faqs } from "../data/faqsDats";

import useSendEmail from "../hooks/useSendEmail";

const FAQ = () => {
  
  const [active, setActive] = useState(0);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");
  const [question, setQuestion] = useState("");
const { sendEmail, loading, success, error } = useSendEmail();

// .......................................send email funtion.................................
const handleSend = async () => {
  if (!question.trim()) return alert("Enter a message");

  const ok = await sendEmail({
    message: question,
  });

  if (ok) setQuestion("");
};

//....................................................................................
  const filteredFaqs = faqs.filter((f) => {
    const matchCategory = filter === "All" || f.category === filter;
    const matchSearch =
      f.question.toLowerCase().includes(search.toLowerCase()) ||
      f.answer.toLowerCase().includes(search.toLowerCase());

    return matchCategory && matchSearch;
  });

  return (
    <section id="faq" className="py-24 px-4 overflow-hidden">
      <div className="container mx-auto">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 gradient-text">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Find answers to common questions about our services and process.
          </p>
        </div>

        {/* Search */}
        <div className="max-w-2xl mx-auto mb-12">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search for answers..."
              className="w-full pl-12 pr-4 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
            />
          </div>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                filter === cat
                  ? "bg-gradient-to-r from-indigo-500 to-purple-600 text-white shadow-lg"
                  : "bg-white/5 text-gray-300 hover:bg-white/10 border border-white/10"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left */}
          <div>
            <h3 className="text-2xl font-bold mb-6 text-white">
              Most Recent
            </h3>

            <div className="space-y-4">
              {filteredFaqs.map((faq, i) => (
                <div
                  key={i}
                  className="glass-effect rounded-xl overflow-hidden border border-white/10"
                >
                  <button
                    onClick={() => setActive(active === i ? null : i)}
                    className="w-full p-6 text-left flex items-center justify-between hover:bg-white/5 transition-all duration-300"
                  >
                    <div className="flex-1 pr-4">
                      <span className="text-sm text-purple-400 font-medium mb-2 block">
                        {faq.category}
                      </span>
                      <span className="text-white font-semibold text-lg">
                        {faq.question}
                      </span>
                    </div>

                    {active === i ? (
                      <Minus className="w-6 h-6 text-purple-400" />
                    ) : (
                      <Plus className="w-6 h-6 text-purple-400" />
                    )}
                  </button>

                  {active === i && (
                    <div className="px-6 pb-6 text-gray-300 leading-relaxed">
                      {faq.answer}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Right */}
          <div>
            <div className="glass-effect rounded-2xl p-8 mb-8 text-center">
              <CircleHelp className="w-32 h-32 mx-auto mb-6 text-purple-400 animate-pulse" />
              <h3 className="text-2xl font-bold text-white mb-4">
                Any Questions?
              </h3>
              <p className="text-gray-300 mb-6">Let me know</p>

             <input
  value={question}
  onChange={(e) => setQuestion(e.target.value)}
  placeholder="Enter here"
  className="w-full px-4 py-3 mb-4 bg-white/5 border border-white/10 rounded-lg text-white"
/>

<button
  onClick={handleSend}
  disabled={loading}
  className="w-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white py-3 rounded-lg"
>
  {loading ? "Sending..." : "Send"}
</button>

{success && <p className="text-green-400 mt-3">Sent successfully ✅</p>}
{error && <p className="text-red-400 mt-3">Failed to send ❌</p>}

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
