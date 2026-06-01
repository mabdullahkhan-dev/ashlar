import ContactInfo from '@/components/contact/ContactInfo';
import ContactForm from '@/components/contact/ContactForm';

export const metadata = {
  title: 'Contact — Ashlar Construction Engineering',
};

export default function ContactPage() {
  return (
    <section className="pt-[170px] pb-[120px]" style={{ background: 'var(--color-bg-base)' }}>
      <div className="max-w-[1280px] mx-auto px-14 max-md:px-6">
        <div className="grid grid-cols-[0.85fr_1.15fr] max-md:grid-cols-1 gap-20 max-md:gap-14">
          <ContactInfo />
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
