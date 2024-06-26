import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { register } from "../services";
export const Register = () => {
  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const navigate = useNavigate();
  const handleRegister = async (event) => {
    event.preventDefault();
    const authDetail = {
      name: nameRef.current.value,
      email: emailRef.current.value,
      password: passwordRef.current.value,
    };
    try {
      const data = await register(authDetail);
      if (data?.accessToken) {
        toast.success("Registeration successful!", {
          closeButton: true,
          position: "bottom-center",
        });
        navigate("/");
      }
      toast.error(data);
    } catch (error) {
      console.error("Error:", error);
      toast.error(error.message || "Registration failed. Please try again.", {
        closeButton: true,
        position: "bottom-center",
      });
    }
  };
  return (
    <>
      <section className="flex-1 w-4/5 mx-auto  text-center italic font-bold text-2xl text-blue-900 dark:text-slate-200 py-5 ">
        <p>REGISTER</p>
        <form onSubmit={handleRegister}>
          <div className="my-2 flex flex-col">
            <label htmlFor="name" className=" block text-left my-4">
              Name
            </label>
            <input
              type="text"
              id="name"
              required
              ref={nameRef}
              placeholder="Enter name please!"
              autoComplete="off"
              className="placeholder:text-blue-700 tracking-wider dark:placeholder:text-slate-900 text-sm md:text-lg block dark:bg-slate-200 rounded-md border-2 border-blue-700 text-blue-700  dark:text-slate-900 italic py-2 px-2 font-semibold dark:border-none"
            />
          </div>
          <div className="my-2 flex flex-col">
            <label
              htmlFor="email"
              className="block text-left my-4 py-1 px-2 italic "
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              ref={emailRef}
              required
              placeholder="Enter  email please!"
              autoComplete="off"
              className="placeholder:text-blue-700 dark:placeholder:text-slate-900 text-sm md:text-lg block dark:bg-slate-200 rounded-md dark:text-slate-900 text-blue-700  py-2 px-2 font-semibold italic tracking-wider border-2 border-blue-700 dark:border-none"
            />
          </div>
          <div className="my-2 flex flex-col">
            <label htmlFor="password" className="block text-left my-4 ">
              Password
            </label>
            <input
              type="password"
              id="password"
              ref={passwordRef}
              required
              autoComplete="off"
              placeholder="Make strong password!"
              className="placeholder:text-blue-700 dark:placeholder:text-slate-900 text-sm md:text-lg block dark:bg-slate-200 rounded-md italic  dark:text-slate-900 text-blue-700 py-2 px-2 text-md font-semibold tracking-wider border-2 border-blue-700 dark:border-none"
            />
          </div>
          <div className="my-10 text-left">
            <button
              type="submit"
              className="text-sm md:text-lg  py-2 px-3 rounded-md border-2 border-blue-700  dark:bg-blue-900 dark:text-white hover:scale-110 italic"
            >
              Register
            </button>
          </div>
        </form>
      </section>
    </>
  );
};
