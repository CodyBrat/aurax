import React from "react";

export default function Contact() {
    return (
        <div className="min-h-screen pt-24 px-6 relative bg-transparent flex items-center justify-center">
            <div className="w-full max-w-2xl bg-black/40 backdrop-blur-md border border-white/10 p-8 md:p-12">
                {/* Header */}
                <div className="text-center mb-12">
                    <h1 className="font-display text-5xl md:text-7xl tracking-wide text-white mb-4">
                        GET IN TOUCH
                    </h1>
                    <p className="text-gray-400">
                        Questions? Collaborations? Dark secrets? Let us know.
                    </p>
                </div>

                {/* Form */}
                <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <label htmlFor="name" className="text-xs uppercase tracking-ultra text-gray-500">Name</label>
                            <input
                                type="text"
                                id="name"
                                className="w-full bg-black/50 border border-white/20 px-4 py-3 text-white focus:outline-none focus:border-white transition-colors placeholder:text-gray-700"
                                placeholder="YOUR NAME"
                            />
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="email" className="text-xs uppercase tracking-ultra text-gray-500">Email</label>
                            <input
                                type="email"
                                id="email"
                                className="w-full bg-black/50 border border-white/20 px-4 py-3 text-white focus:outline-none focus:border-white transition-colors placeholder:text-gray-700"
                                placeholder="YOUR EMAIL"
                            />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label htmlFor="subject" className="text-xs uppercase tracking-ultra text-gray-500">Subject</label>
                        <input
                            type="text"
                            id="subject"
                            className="w-full bg-black/50 border border-white/20 px-4 py-3 text-white focus:outline-none focus:border-white transition-colors placeholder:text-gray-700"
                            placeholder="TOPIC"
                        />
                    </div>

                    <div className="space-y-2">
                        <label htmlFor="message" className="text-xs uppercase tracking-ultra text-gray-500">Message</label>
                        <textarea
                            id="message"
                            rows={6}
                            className="w-full bg-black/50 border border-white/20 px-4 py-3 text-white focus:outline-none focus:border-white transition-colors placeholder:text-gray-700 resize-none"
                            placeholder="YOUR MESSAGE..."
                        ></textarea>
                    </div>

                    <button
                        type="submit"
                        className="w-full btn-primary mt-4"
                    >
                        Send Message
                    </button>
                </form>
            </div>
        </div>
    );
}
