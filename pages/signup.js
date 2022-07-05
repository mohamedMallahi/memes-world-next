import MemeCard from '../components/MemeCard';
import Navbar from '../components/Navbar';

export default function Signup() {
  return (
    <>
      <div className="">
        {/* <h2>Sign Up</h2> */}
        <form className="mt-2">
          <div class="mb-3">
            <label for="fullname" class="form-label">
              Full name
            </label>
            <input type="text" class="form-control" id="fullname" />
          </div>
          <div class="mb-3">
            <label for="email" class="form-label">
              Email address
            </label>
            <input
              type="email"
              class="form-control"
              id="email"
              aria-describedby="emailHelp"
            />
            <div id="emailHelp" class="form-text">
              We'll never share your email with anyone else.
            </div>
          </div>
          <div class="mb-3">
            <label for="password1" class="form-label">
              Password
            </label>
            <input type="password" class="form-control" id="password1" />
          </div>
          <div class="mb-3 form-check">
            <input type="checkbox" class="form-check-input" id="check1" />
            <label class="form-check-label" for="check1">
              Check me out
            </label>
          </div>
          <button type="submit" class="btn btn-primary">
            Signup
          </button>
        </form>
      </div>
    </>
  );
}
