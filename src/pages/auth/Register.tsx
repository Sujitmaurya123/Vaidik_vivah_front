import { Link, useNavigate } from "react-router-dom";
import Input from "../../components/input/Input";
import type { FormEvent } from "react";


const Register = () => {
  const navigate = useNavigate();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    // You can add form validation or async API call here

    navigate("/create-password"); // redirect after successful "submission"
  };

  return (
    <div className={`min-w-screen min-h-screen flex flex-col items-center justify-center bg-[#9e2727]`}>
      <div className="flex items-center justify-center mb-14">
        <Link to={"/"} className="mx-auto mb-2 fixed top-10">
          <img src="/logotest3.png" alt="Logo" className="w-72 h-24" />
        </Link>
      </div>

      <div className="flex flex-col items-center justify-center mt-8 mb-2">
        <div className="bg-white flex items-center justify-center rounded-md w-10 h-10">
          <img src="/star.png" alt="Star" />
        </div>
        <div className="flex flex-col items-center justify-center text-white mt-4 text-center">
          <h1 className="text-4xl font-bold">Create an account</h1>
          <p className="mt-4 md:text-xl">
            By tapping the button, you agree to our Terms. Learn how we process
            <br className="hidden md:block" /> your data in our Privacy Policy and Cookie Policy.
          </p>
        </div>
      </div>

      <div className="w-full max-w-md px-2 py-4">
        <form className="space-y-6" onSubmit={handleSubmit}>
          <Input
            label="Email"
            type="email"
            placeholder="Enter your email"
          />

          <button
            type="submit"
            className="w-full py-2 px-4 rounded bg-[#ffffff]"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
