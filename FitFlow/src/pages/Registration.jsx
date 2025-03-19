import { useState } from "react";
import "../Components/Registration.css"; // Import the CSS file

export default function Registration() {
  const [user, setUser] = useState({
    name: "",
    email: "",
    age: "",
    weight: "",
    height: "",
    fitnessGoal: "",
    activityLevel: "",
  });

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch("https://fitflow-server-vzoy.onrender.com/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });

    if (response.ok) {
      alert("Registration Successful!");
      setUser({
        name: "",
        email: "",
        age: "",
        weight: "",
        height: "",
        fitnessGoal: "",
        activityLevel: "",
      });
    } else {
      alert("Error Registering User");
    }
  };

  return (
    <div className="registration-container">
      <div className="registration-box">
        <h2>Join FitFlow</h2>
        <form onSubmit={handleSubmit} className="registration-form">
          <input type="text" name="name" placeholder="Full Name" value={user.name} onChange={handleChange} required />
          <input type="email" name="email" placeholder="Email Address" value={user.email} onChange={handleChange} required />
          <input type="number" name="age" placeholder="Age" value={user.age} onChange={handleChange} required />
          <input type="number" name="weight" placeholder="Weight (kg)" value={user.weight} onChange={handleChange} required />
          <input type="number" name="height" placeholder="Height (cm)" value={user.height} onChange={handleChange} required />
          
          <select name="fitnessGoal" value={user.fitnessGoal} onChange={handleChange} required>
            <option value="">Select Your Fitness Goal</option>
            <option value="weight loss">Weight Loss</option>
            <option value="muscle gain">Muscle Gain</option>
            <option value="general fitness">General Fitness</option>
            <option value="endurance">Endurance</option>
          </select>

          <select name="activityLevel" value={user.activityLevel} onChange={handleChange} required>
            <option value="">Select Activity Level</option>
            <option value="sedentary">Sedentary (Little to no exercise)</option>
            <option value="light">Light (1-2 days per week)</option>
            <option value="moderate">Moderate (3-4 days per week)</option>
            <option value="active">Active (5-6 days per week)</option>
            <option value="very active">Very Active (Daily intense exercise)</option>
          </select>

          <button type="submit">Register</button>
        </form>
      </div>
    </div>
  );
}
