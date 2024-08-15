export default function Footer() {
  return (
    <footer>
      <hr className="border-gray-300 border" />
      <div className="w-full mx-auto max-w-screen-xl py-4 md:flex md:items-center md:justify-between text-gray-500">
        <span className="sm:text-center">
          © 2024{" "}
          <a href="#" className="hover:underline">
            Tyson Pederson
          </a>
          . All Rights Reserved.
        </span>
        <p className="sm:text-center">
          Built using <a className="hover:opacity-60 text-sky-500 transition-all duration-200" href="https://react.dev/">React</a> and{" "}
          <a className="hover:opacity-60 text-sky-500 transition-all duration-200" href="https://tailwindcss.com/">Tailwind</a>.
        </p>
      </div>
    </footer>
  );
}
