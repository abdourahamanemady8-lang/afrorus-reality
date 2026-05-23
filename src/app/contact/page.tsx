import ContactForm from '@/components/ContactForm';

export const metadata = {
  title: 'Contact – AfroRus Reality',
  description: 'Contactez-nous pour toute question, partenariat ou proposition de projet.',
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-off-white pt-32 pb-16 px-4">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-5xl font-bold text-charcoal mb-4 text-center">
          Contactez-<span className="text-russia-red">nous</span>
        </h1>
        <p className="text-center text-gray-600 mb-12">
          Une question, une proposition de partenariat, ou simplement envie d'échanger ? Écrivez-nous !
        </p>
        <ContactForm />
      </div>
    </main>
  );
}