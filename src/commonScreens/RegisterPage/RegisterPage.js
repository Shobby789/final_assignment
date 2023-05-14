import {
  Button,
  FormControl,
  FormControlLabel,
  FormGroup,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from "@mui/material";
import "./RegisterPage.css";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { createUser } from "../../redux/authSlice/authSlice";

export default function RegisterPage() {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");
  const [UserType, setUserType] = useState();
  const [secretKey, setSecretKey] = useState("");

  const navigate = useNavigate();
  const { isLoading } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const createUserHandler = (values) => {
    dispatch(createUser(values))
      .unwrap()
      .then(() => {
        navigate("/");
        toast.success("Sign Up Successful");
      })
      .catch((err) => toast.error(err.message));
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   createUserHandler({
  //     userName,
  //     email,
  //     password,
  //     phoneNumber,
  //     address,
  //     UserType,
  //     secretKey,
  //   });
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (UserType === "Admin" && secretKey !== "shoaib") {
      return toast.error("Invalid Admin");
    } else {
      dispatch(
        createUser({
          userName,
          email,
          password,
          phoneNumber,
          UserType,
          secretKey,
        })
      );
    }
    await fetch("http://localhost:8000/api/createUser", {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        userName,
        email,
        password,
        phoneNumber,
        address,
        UserType,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        toast.success("Registered Successfully");
        console.log(data, "User Registerd");
        navigate("/");
      });

    setUserName("");
    setPassword("");
    setPhoneNumber();
    setEmail("");
    setAddress("");
    setUserType();
    setSecretKey("");
  };
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <div className="register-page">
      <div className="left-box"></div>
      <div className="right-box">
        <Typography
          variant="h4"
          component="h4"
          sx={{
            fontWeight: "bold",
            letterSpacing: ".3rem",
            textAlign: "center",
          }}
        >
          Welcome To Food<span style={{ color: "yellow" }}>dev</span>
        </Typography>
        <Typography variant="h5" component={"h5"} mt={2}>
          Register As
        </Typography>
        <form onSubmit={handleSubmit}>
          <FormGroup>
            <FormControl sx={{ marginTop: "10px", width: "300px" }}>
              <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                // defaultValue="user"
                name="radio-buttons-group"
              >
                <FormControlLabel
                  control={<Radio />}
                  label="User"
                  name="UserType"
                  value="User"
                  onChange={(e) => setUserType(e.target.value)}
                />
                <FormControlLabel
                  control={<Radio />}
                  label="Admin"
                  name="UserType"
                  value="Admin"
                  onChange={(e) => setUserType(e.target.value)}
                />
              </RadioGroup>
            </FormControl>
            <FormControl sx={{ marginTop: "30px", width: "300px" }}>
              <TextField
                label="Name"
                variant="outlined"
                type="text"
                onChange={(e) => setUserName(e.target.value)}
                value={userName}
                name="userName"
                required
              />
            </FormControl>
            <FormControl sx={{ marginTop: "30px", width: "300px" }}>
              <TextField
                label="Email"
                variant="outlined"
                type="text"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                name="email"
              />
            </FormControl>
            <FormControl sx={{ marginTop: "30px", width: "300px" }}>
              <TextField
                label="Phone Number"
                variant="outlined"
                type="text"
                onChange={(e) => setPhoneNumber(e.target.value)}
                value={phoneNumber}
                name="phoneNumber"
              />
            </FormControl>
            <FormControl sx={{ marginTop: "30px", width: "300px" }}>
              <TextField
                label="Address"
                variant="outlined"
                type="text"
                onChange={(e) => setAddress(e.target.value)}
                value={address}
                name="address"
              />
            </FormControl>
            <FormControl sx={{ marginTop: "30px", width: "300px" }}>
              <InputLabel htmlFor="outlined-adornment-password">
                Password
              </InputLabel>
              <OutlinedInput
                id="outlined-adornment-password"
                type={showPassword ? "text" : "password"}
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                name="password"
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
                label="Password"
              />
            </FormControl>
            {UserType === "Admin" ? (
              <>
                <FormControl sx={{ marginTop: "30px", width: "300px" }}>
                  <TextField
                    label="Enter Secret Key"
                    type="text"
                    variant="outlined"
                    onChange={(e) => setSecretKey(e.target.value)}
                    value={secretKey}
                    name="secretKey"
                  />
                </FormControl>
              </>
            ) : null}
            <FormControl sx={{ marginTop: "30px", width: "300px" }}>
              <Button
                variant="contained"
                type="submit"
                sx={{
                  backgroundColor: "black",
                  ":hover": { backgroundColor: "#39393A" },
                }}
                loading={isLoading}
              >
                Register
              </Button>
            </FormControl>
            <FormControl sx={{ marginTop: "10px" }}>
              <Link to="/">Already have an account? Sign In</Link>
            </FormControl>
          </FormGroup>
        </form>
      </div>
    </div>
  );
}
