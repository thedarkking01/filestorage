import Link from "next/link";

export function Footer() {
  return (
    <div className="h-40 bg-gray-100 mt-12 flex items-center z-70">
      <div className="container mx-auto flex justify-between items-center">
        <div>FileStorage
        <p className="text-xs text-gray-600">© 2024 by FileStorage</p>
        </div>
        

        <Link className="text-blue-900 hover:text-blue-500" href="/PrivacyPolicy">
          Privacy Policy
        </Link>
        <Link
          className="text-blue-900 hover:text-blue-500"
          href="/TermsOfService"
        >
          Terms of Service
        </Link>
        <Link className="text-blue-900 hover:text-blue-500" href="/About">
          About
        </Link>

        <Link className="text-blue-900 hover:text-blue-500" href="/ContactUs">
          Contact Us
        </Link>
      </div>
    </div>
  );
}
