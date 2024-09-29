import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    navigate("/");
  }

  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <form
        onSubmit={handleSubmit}
        className="grid gap-3 border border-[#005866] rounded px-12 pb-16 pt-6 shadow-lg"
      >
        <h1 className="text-lg font-bold text-center py-6">
          Login to Dashboard
        </h1>
        <label className="input input-bordered flex items-center gap-2">
          Name
          <input type="text" className="grow" placeholder="Your name" />
        </label>
        <label className="input input-bordered flex items-center gap-2 invalid:focus:input-error">
          Email
          <input type="email" className="grow" placeholder="Your email" />
        </label>
        <button
          className="p-3 bg-[#3C8796] hover:bg-[#004250] rounded text-white font-bold"
          type="submit"
        >
          Log In
        </button>
      </form>
    </div>
  );
}
