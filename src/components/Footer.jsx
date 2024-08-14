export default function Footer() {
  return (
    <footer className="bg-white m-4 dark:bg-gray-800">
      <hr className="h-0.5 my-8 bg-gray-200 border-0 dark:bg-gray-700" />
      <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2024{" "}
          <a href="#" className="hover:underline">
            Tyson Pederson
          </a>
          . All Rights Reserved.
        </span>
        <p className="text-sm text-gray-500 sm:text-center dark:text-gray-400">Built using <a href="https://react.dev/">React</a> and <a href="https://tailwindcss.com/">Tailwind</a>.</p>
      </div>
    </footer>
  );
}
