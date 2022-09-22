interface FooterProps {
  className?: string;
}
export function Footer({ className }: FooterProps) {
  return (
    <footer
      className={`${className} flex flex-col overflow-hidden bg-gray-300 gap-6 p-6`}
    >
      <div className="flex gap-6">
        <div className="hidden md:block flex-grow">
          <div className="aspect-square">
            <MapEmbed />
          </div>
        </div>
        <div className="grow-[4] flex flex-col gap-2">
          <ContactForm />
        </div>
        <div className="hidden lg:block flex-grow">
          <div className="aspect-square">
            <iframe
              src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FMirrioneFrancescoLegnamiSrl%2F&tabs=timeline&width=340&height=450&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
              className="w-full h-full"
              scrolling="no"
              allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
            />
          </div>
        </div>
      </div>
      <Address />
    </footer>
  );
}

function MapEmbed() {
  return (
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3145.3639504474468!2d12.913315115641499!3d37.96863490875439!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1319873c8c2b1381%3A0x182561305c44eb6b!2sMIRRIONE%20FRANCESCO%20Legnami%20srl%20Sede!5e0!3m2!1sit!2sit!4v1641306739253!5m2!1sit!2sit"
      className="w-full h-full"
      loading="lazy"
    ></iframe>
  );
}

function ContactForm() {
  return (
    <form className="flex flex-col gap-4 w-full">
      <div role="group" className="flex flex-col">
        <label htmlFor="name">Il tuo nome:</label>
        <input
          className="p-1"
          type="text"
          placeholder="Nome"
          id="name"
          name="name"
        />
      </div>
      <div role="group" className="flex flex-col">
        <label htmlFor="email">La tua email:</label>
        <input
          className="p-1"
          type="text"
          placeholder="your@email.com"
          id="email"
          name="email"
        />
      </div>
      <div role="group" className="flex flex-col">
        <label htmlFor="subject">Oggetto:</label>
        <input className="p-1" type="text" id="subject" name="subject" />
      </div>
      <div role="group" className="flex flex-col">
        <label htmlFor="message">Il tuo messaggio (facoltativo):</label>
        <textarea className="p-1" id="message" name="message" />
      </div>
      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Invia
      </button>
    </form>
  );
}

function Address() {
  return (
    <address className="text-sm flex flex-col md:flex-row justify-evenly gap-6">
      <div className="flex-grow">
        <p>Francesco Mirrione Legnami s.r.l.</p>
        <p>SS113, 335/700, 91013 Calatafimi TP</p>
        <p>
          Tel.:{' '}
          <a className="underline" href="tel:+3909242300">
            +39 0924 23000
          </a>{' '}
          – WhatsApp{' '}
          <a className="underline" href="tel:+393756696729">
            +39 375 669 6729
          </a>
        </p>
      </div>
      <div className="flex-grow">
        <p>Aperto dal Lunedì al Venerdì dalle ore 08.30 alle 18.00</p>
        <p>Aperto il Sabato dalle ore 8.30 alle 13.30</p>
      </div>
    </address>
  );
}
