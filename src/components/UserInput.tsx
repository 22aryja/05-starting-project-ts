type UserInputProps = {
  label: string;
  value: number;
  onChange: (e: any) => void;
};

export default function UserInput({ label, value, onChange }: UserInputProps) {
  return (
    <>
      <label id="user-input">{label}</label>
      <input
        id="user-input"
        type="number"
        required
        value={value}
        onChange={onChange}
      ></input>
    </>
  );
}
