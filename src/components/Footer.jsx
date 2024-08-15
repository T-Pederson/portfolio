export default function Footer() {
  return (
    <footer>
      <hr className="my-8 border-gray-300 border" />
      <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
        <span className="text-gray-500 sm:text-center">
          © 2024{" "}
          <a href="#" className="hover:underline">
            Tyson Pederson
          </a>
          . All Rights Reserved.
        </span>
        <p className="text-gray-500 sm:text-center">
          Built using <a className="hover:opacity-60 text-sky-500 transition-all duration-200" href="https://react.dev/">React</a> and{" "}
          <a className="hover:opacity-60 text-sky-500 transition-all duration-200" href="https://tailwindcss.com/">Tailwind</a>.
        </p>
      </div>
    </footer>
  );
}
