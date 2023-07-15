export default function Width({ handleNewProperty }) {
  return (
    <>
      <p>Width: </p>
      <input
        type="text"
        placeholder="20px"
        onChange={(event) => handleNewProperty(event.target.value, "width")}
        className="text-white bg-slate-600 rounded-md w-[70px]"
      />
    </>
  );
}
