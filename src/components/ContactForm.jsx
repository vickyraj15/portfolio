export default function ContactForm() {
    return (
        <form
            action="https://api-mailprime.vercel.app/key/ACCESS_KEY"
            method="POST"
            id="contact-form"
        >
            <input type="text" name="name" placeholder="Enter name" required />
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
    );
}
