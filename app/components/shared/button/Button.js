const Button = ({ label, onClick, disabled, outline, icon: Icon }) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`relative disabled:opacity-70 disabled:cursor-not-allowed hover:opacity-80 transition w-full bg-red-1 text-white rounded-3xl py-3 text-xl font-semibold`}
    >
      {Icon && <Icon size={24} className=" absolute right-4 top-[14px]" />}
      {label}
    </button>
  );
};

export default Button;
