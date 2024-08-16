const footerItems = ["Terms of Service", "Privacy Policy", "Contact Us"];

const Footer = () => {
  return (
    <footer
      className="mt-[80px] text-center p-[20px_0] border-t-[1px] border-gray-600"
      role="contentinfo"
    >
      <p>© 2024 BookAI. All rights reserved.</p>
      <nav aria-label="Footer">
        <ul className="flex justify-center">
          {footerItems.map((item) => (
            <li key={item} className="mx-[10px] list-none">
              <a className="hover:underline" href="#" aria-label={item}>
                {item}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </footer>
  );
};

export default Footer;
