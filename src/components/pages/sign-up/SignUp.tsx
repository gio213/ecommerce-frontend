import bg from "../../../assets/sing-up-bg.jpeg";
import { Button } from "../../Button";
import { CheckBox } from "../../CheckBox";
import { FileInput } from "../../FileInput";
import { Image } from "../../Image";
import { Input } from "../../Input";
import { Spinner } from "../../Spinner";
import { useEffect, useState } from "react";
import AuthService from "../../../services/authService";
import { SelectInput } from "../../SelectInput";
import { HotToast } from "../../HotToast";
import { Toaster } from "react-hot-toast";

export const SignUp = () => {
  const [file, setFile] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [gender, setGender] = useState("");
  const [loading, setLoading] = useState(false);
  const [checked, setChecked] = useState(false);
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState(0);

  const handleSignUp = async () => {
    try {
      setLoading(true);
      const res = await AuthService.signUp(
        email,
        password,
        firstName,
        lastName,
        gender,
        file
      );
      console.log(res);
      setMessage(res.data.message);
      setStatus(res.status);
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      console.log(err);
      setMessage(err.response.data.message);
      setStatus(err.response.status);
    } finally {
      setInterval(() => {
        setLastName("");
        setFirstName("");
        setEmail("");
        setPassword("");
        setGender("");
        setMessage("");
        setFile("");
        setStatus(0);
        setLoading(false);
      }, 2000);
    }
  };

  const handleProfileImg = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    setFile(file);

    return { file, setFile };
  };

  useEffect(() => {
    console.log(message, status);
  }, [message, status]);

  return (
    <form className="w-full h-full flex justify-between items-center">
      <div className="w-1/2 h-full  ">
        <Image width="100%" height="100%" src={bg} alt="background" />
      </div>
      <div className="  flex flex-col  justify-center items-center w-1/2 h-screen gap-4 ">
        <h1 className="font-bold text-2xl font-popins">Sign up</h1>
        <p>Create your account in a seconds</p>

        <Input
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          placeholder="Last Name:"
          type="text"
        />
        <Input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email Address:"
          type="email"
        />
        <Input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Create Password::"
          type="password"
        />
        <SelectInput
          value={gender}
          onChange={(e) => setGender(e.target.value)}
        />
        <FileInput onChange={handleProfileImg} />

        <div className="flex items-center gap-2">
          <CheckBox
            checked={checked}
            setChecked={(e) => setChecked(e.target.checked)}
          />
          <p>I agree to the terms and privacy policy</p>
        </div>
        <Button onClick={handleSignUp} classname="w-10/12">
          {loading ? <Spinner size="sm" isLoading={loading} /> : "Sign Up"}
        </Button>
      </div>
      {status !== 0 && <HotToast message={message} status={status} />}
      <Toaster />
    </form>
  );
};
