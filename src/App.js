import React from "react";
import { useForm } from "react-hook-form";

const App = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          {...register("username", { required: true })}
        />
        {errors.username && <span>Username is required</span>}
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          {...register("password", { required: true, minLength: 6 })}
        />
        {errors.password && errors.password.type === "required" && (
          <span>Password is required</span>
        )}
        {errors.password && errors.password.type === "minLength" && (
          <span>Password must have at least 6 characters</span>
        )}
      </div>
      <div>
        <label htmlFor="address">Address:</label>
        <input type="text" id="address" {...register("address")} />
      </div>
      <div>
        <label htmlFor="phone">Phone:</label>
        <input type="text" id="phone" {...register("phone")} />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
        />
        {errors.email && errors.email.type === "required" && (
          <span>Email is required</span>
        )}
        {errors.email && errors.email.type === "pattern" && (
          <span>Invalid email format</span>
        )}
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default App;
