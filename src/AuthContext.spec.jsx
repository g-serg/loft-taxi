import { render } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import { AuthConsumer, AuthProvider } from "./AuthContext";

describe("Auth Context", () => {
  let isLoggenIn;
  let logIn;
  let logOut;

  const setup = () =>
    render(
      <AuthProvider>
        <AuthConsumer>
          {(value) => {
            isLoggenIn = value.isLoggenIn;
            logIn = value.logIn;
            logOut = value.logOut;
            return null;
          }}
        </AuthConsumer>
      </AuthProvider>,
    );

  it("should isLoggenIn in false", () => {
    setup();
    expect(isLoggenIn).toBe(false);
  });

  it("should logIn set isLoggenIn in true", () => {
    setup();
    act(() => {
      logIn("1", "2");
    });
    expect(isLoggenIn).toBe(true);
  });

  it("should logOut set isLoggenIn in false", () => {
    setup();
    act(() => {
      logIn("1", "2");
      logOut();
    });
    expect(isLoggenIn).toBe(false);
  });
});
