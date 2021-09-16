const Footer: React.FC = () => (
  <footer className="flex flex-col items-center justify-center">
    <p>
      A website by{" "}
      <a
        href="https://eggsy.xyz"
        target="_blank"
        rel="noreferrer"
        title="Visit his website!"
        className="underline"
      >
        EGGSY
      </a>
    </p>

    <p>Made with Next.js and Tailwind CSS</p>

    <p>© 2021</p>
  </footer>
);

export default Footer;
