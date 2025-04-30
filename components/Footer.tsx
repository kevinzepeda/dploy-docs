import type { NavConfig, AuthorConfig } from "@portaljs/core";

export interface FooterProps {
  links: NavConfig["links"];
  author: AuthorConfig;
}

const Footer: React.FC<FooterProps> = ({ links, author }) => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-background dark:bg-background-dark text-primary dark:text-primary-dark pt-16 pb-20 px-14 flex flex-col items-center justify-center gap-3">
      <div className="flex w-full flex-wrap justify-center mb-2">
        {links.map((link) => (
          <a
            key={link.href}
            className="inline-flex items-center mx-4 px-1 py-1 text-black hover:text-primary dark:text-white hover:dark:text-primary-dark no-underline font-semibold"
            href={link.href}
          >
            {link.name}
          </a>
        ))}
      </div>
      <p className="flex items-center justify-center gap-2">
        <span>&copy; {currentYear}</span>
        <a
          href={author.url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1 no-underline font-semibold text-black dark:text-white"
        >
          <span>{author.name}</span>
        </a>
      </p>
      <p className="flex items-center justify-center gap-1">
        <span>Made with ❤️ by </span>
        <a
          href=""
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1 no-underline font-semibold text-black dark:text-white"
        >
          <span>ghost</span>
        </a>
      </p>
    </footer>
  );
};

export default Footer;
