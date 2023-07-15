export default function Height({ handleNewProperty }) {
  return (
    <>
      <p>Height: </p>
      <input
        type="text"
        placeholder="20px"
        onChange={(event) => handleNewProperty(event.target.value, "height")}
        className="text-white bg-slate-600 rounded-md w-[70px]"
      />
    </>
  );
}
