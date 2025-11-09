import { MaxWidthWrapper } from "@/components/utils/MaxWidthWrapper";

export const metadata = {
  title: "Privacy Policy | Logic Freight",
  description:
    "Learn how Logic Freight collects, uses, and protects your information. We value your privacy and comply with UK GDPR regulations.",
  openGraph: {
    title: "Privacy Policy | Logic Freight",
    description:
      "Learn how Logic Freight collects, uses, and protects your information. We value your privacy and comply with UK GDPR regulations.",
    images: ["/assets/images/logo.png"],
  },
};

export default function PrivacyPolicy() {
  return (
    <main className="bg-zinc-950 text-zinc-50 py-20">
      <MaxWidthWrapper className="prose prose-invert max-w-3xl">
        <h1>Privacy Policy</h1>
        <p>
          <strong>Last updated:</strong> {new Date().toLocaleDateString("en-GB")}
        </p>

        <p>
          Logic Freight (“we”, “us”, or “our”) respects your privacy and is
          committed to protecting your personal data. This Privacy Policy
          explains how we collect and use your information when you use our
          website or contact us.
        </p>

        <h2>Information We Collect</h2>
        <ul>
          <li>
            Information you provide through our online forms, such as your name,
            email address, phone number, and company details.
          </li>
          <li>
            Basic website usage data (such as page visits) collected through
            standard analytics tools.
          </li>
        </ul>

        <h2>How We Use Your Information</h2>
        <ul>
          <li>To respond to your enquiries and process your haulage requests.</li>
          <li>To manage and improve our services and website performance.</li>
          <li>
            To contact you with relevant updates or marketing (if you have opted
            in).
          </li>
        </ul>

        <h2>Mailing Lists & Marketing</h2>
        <p>
          If you sign up to receive updates, your details may be stored securely
          with an email marketing service such as Mailchimp. You can unsubscribe
          from these communications at any time.
        </p>

        <h2>Data Storage & Protection</h2>
        <p>
          We store personal information securely and only retain it for as long
          as necessary for legitimate business purposes. We do not sell, rent,
          or share your data with third parties for their own marketing.
        </p>

        <h2>Your Rights</h2>
        <p>
          Under UK GDPR, you have the right to access, correct, or delete your
          personal information. To make a request, please contact us at{" "}
          <a href="mailto:traffic@logicfreight.co.uk">traffic@logicfreight.co.uk</a>.
        </p>

        <h2>Contact Us</h2>
        <p>
          For any questions about this Privacy Policy, contact:
          <br />
          <strong>Logic Freight</strong>
          <br />
          Email: <a href="mailto:traffic@logicfreight.co.uk">traffic@logicfreight.co.uk</a>
        </p>
      </MaxWidthWrapper>
    </main>
  );
}
