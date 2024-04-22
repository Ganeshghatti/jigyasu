import React, { useState, useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";
import Input from "@mui/material/Input";
import FilledInput from "@mui/material/FilledInput";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import "./Login.scss";
import Spinner from "../../components/Spinner";
import { Stack } from "@mui/material";
import Alert from "@mui/material/Alert";
import { Link } from "react-router-dom";
import { REACT_APP_BACK_URL } from "../../config/config";
import { saveuser } from "../../features/User";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState(null);
  const [forgotpassword, setforgotpassword] = useState(false);
  const [isforgetpasswordmailsent, setisforgetpasswordmailsent] =
    useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value, checked } = e.target;

    if (name === "rememberMe") {
      setRememberMe(checked);
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      const response = await axios.post(
        `${REACT_APP_BACK_URL}/user/login`,
        formData
      );
      const user = {
        email: response.data.email,
        username: response.data.username,
        token: response.data.token,
      };

      localStorage.setItem("user", JSON.stringify(user));
      dispatch(
        saveuser({
          email: user.email,
          username: user.username,
          token: user.token,
        })
      );
      navigate(`/`);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setAlert(
        <Alert
          style={{ position: "fixed", bottom: "3%", left: "2%", zIndex: 999 }}
          variant="filled"
          severity="error"
        >
          {error.response.data.error}
        </Alert>
      );
      setTimeout(() => setAlert(null), 5000);
    }
  };

  const isForgotPasswordf = () => {
    setforgotpassword(!forgotpassword);
  };

  const handleforgotpasswordSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      const response = await axios.post(
        `${REACT_APP_BACK_URL}/user/forgot-password`,
        formData
      );
      setisforgetpasswordmailsent(true);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setAlert(
        <Alert
          style={{ position: "fixed", bottom: "3%", left: "2%", zIndex: 999 }}
          variant="filled"
          severity="error"
        >
          {error.response.data.error}
        </Alert>
      );
      setTimeout(() => setAlert(null), 5000);
    }
  };

  return (
    <section
      className="w-screen h-screen flex justify-center overflow-hidden relative"
      id="login"
    >
      {loading && <Spinner />} <Stack spacing={2}>{alert}</Stack>
      <img src="/public/assets/logo.png" alt="" className="logo" />
      <img src="/public/assets/login/circle1.png" className="circle1" alt="" />
      <img src="/public/assets/login/circle2.png" className="circle2" alt="" />
      <img src="/public/assets/login/circle3.png" className="circle3" alt="" />
      <img src="/public/assets/login/circle4.png" className="circle4" alt="" />
      <img src="/public/assets/login/circle5.png" className="circle5" alt="" />
      <img src="/public/assets/login/circle6.png" className="circle6" alt="" />
      <img src="/public/assets/login/circle7.png" className="circle7" alt="" />
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-2 justify-center"
      >
        <p className="title">Log in </p>
        <p className="desc">Login to continue using the app</p>
        <div className="flex flex-col gap-2 w-full mt-8">
          <label htmlFor="login-email">Email Address</label>
          <input
            type="email"
            name="email"
            id="login-email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="w-full flex flex-col gap-2">
          <label htmlFor="login-password">Your Password</label>
          <div className="flex relative w-full items-center">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
            <button
              type="button"
              onClick={handleClickShowPassword}
              onMouseDown={handleMouseDownPassword}
              className="absolute right-2"
            >
              {showPassword ? <VisibilityOff /> : <Visibility />}
            </button>
          </div>
        </div>
        <div className="flex w-full justify-between items-center">
          <span className="forgot-password" onClick={isForgotPasswordf}>
            Forgot Password?
          </span>
          <p className="create-account">
            Don't have an Account ?
            <Link to="/signup" className="text-[#E36863]">
              Sign up
            </Link>
          </p>
        </div>
        <button type="submit" className="button-box w-full mt-8">
          Login
        </button>
      </form>
    </section>
  );
};

export default Login;
