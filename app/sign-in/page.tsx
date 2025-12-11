import { SignIn } from "@stackframe/stack";
import Link from "next/link";
export default function SignInPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-br from-blue-50 to-purple-100">
      <div className="max-w-md w-full space-y-8">
        <SignIn />
        <Link href="/" className="mt-4 text-sm text-gray-500 hover:text-gray-700">
          Go Back to Home
        </Link>
      </div>
    </div>
  );
}
