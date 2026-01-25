export default function ContactForm() {
    return (
        <div className="skill-bar w-full h-fit flex flex-wrap justify-evenly py-4 sm:py-5 md:py-6 px-6 md:px-12 sm:px-9">
            <div className="w-full flex justify-center mb-6">
                <h2 className="text-3xl sm:text-5xl border-b border-black dark:border-white px-2 text-green-400 font-bold mb-6">
                    contact me
                </h2>
            </div>

            <section className="w-full   text-white flex items-center justify-center px-6 py-16 gap-4">
                <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* LEFT CONTENT */}
                    <div className="flex flex-col gap-6">
                        <h2 className="text-4xl font-extrabold uppercase">
                            Get in Touch
                        </h2>

                        <p className="text-gray-400 leading-relaxed">
                            We'd love to hear from you – whether it's a
                            question, feedback, or just to say hello, feel free
                            to reach out!
                        </p>

                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center">
                                <img
                                    src="https://static.thenounproject.com/png/location-icon-5125568-512.png"
                                    alt="Location Icon"
                                    width="32"
                                    height="32"
                                />
                            </div>
                            <span>Patna, Bihar</span>
                        </div>

                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center">
                                ✉️
                            </div>
                            <span>vickyraj707025@gmail.com</span>
                        </div>

                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center">
                                📞
                            </div>
                            <span>+91 707XXXXX88</span>
                        </div>
                    </div>
                    <form
                        action="https://api-mailprime.vercel.app/key/ACCESS_KEY"
                        method="POST"
                        id="contact-form"
                    >
                        <input
                            type="text"
                            name="name"
                            placeholder="Enter name"
                            required
                        />
                        <input
                            type="email"
                            name="email"
                            placeholder="Enter email"
                            required
                        />
                        <textarea
                            name="message"
                            placeholder="Enter message"
                            required
                        ></textarea>
                        {/* <!-- Honeypot Spam Protection --> */}
                        <input
                            type="checkbox"
                            name="mailprime"
                            style={{ display: "none" }}
                        />
                        <button type="submit">Submit</button>
                    </form>
                </div>
            </section>
        </div>
    );
}
