import { useState } from "react";

export const PasswordGenerator = () => {
  const [length, setLength] = useState(8);
  const [includeUppercase, setIncludeUppercase] = useState(true);
  const [includeLowercase, setIncludeLowercase] = useState(true);
  const [includeNumber, setIncludeNumber] = useState(true);
  const [includeSymbol, setIncludeSymbol] = useState(true);
  const [password, setPassword] = useState("");

  const generatedPassword = () => {
    let charset = "";
    if (includeUppercase) charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (includeLowercase) charset += "abcdefghijklmnopqrstuvwxyz";
    if (includeNumber) charset += "0123456789";
    if (includeSymbol) charset += "!@#$%^&*()_+-=/?";
    let generatedPassword = "";
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * charset.length);
      generatedPassword += charset[randomIndex];
    }
    setPassword(generatedPassword);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(password);
    alert("Password Copied");
  };

  return (
    <div className="password-generator">
      <h2>Strong Password Generator</h2>
      <div className="input-group">
        <label htmlFor="num">Password Length:</label>
        <input
          type="number"
          id="num"
          value={length}
          onChange={(e) => setLength(parseInt(e.target.value))}
        />
      </div>
      <div className="checkbox-group">
        <input
          type="checkbox"
          id="upper"
          checked={includeUppercase}
          onChange={(e) => setIncludeUppercase(e.target.checked)}
        />
        <label htmlFor="upper">Include Uppercase</label>
      </div>
      <div className="checkbox-group">
        <input
          type="checkbox"
          id="lower"
          checked={includeLowercase}
          onChange={(e) => setIncludeLowercase(e.target.checked)}
        />
        <label htmlFor="lower">Include Lowercase</label>
      </div>
      <div className="checkbox-group">
        <input
          type="checkbox"
          id="number"
          checked={includeNumber}
          onChange={(e) => setIncludeNumber(e.target.checked)}
        />
        <label htmlFor="number">Include Number</label>
      </div>
      <div className="checkbox-group">
        <input
          type="checkbox"
          id="symbol"
          checked={includeSymbol}
          onChange={(e) => setIncludeSymbol(e.target.checked)}
        />
        <label htmlFor="symbol">Include Symbol</label>
      </div>
      <button className="generate-btn" onClick={generatedPassword}>
        Generate Password
      </button>
      <div className="generate-password">
        <input type="text" readOnly value={password} />
        <button className="btn-copy" onClick={copyToClipboard}>
          Copy
        </button>
      </div>
    </div>
  );
};
