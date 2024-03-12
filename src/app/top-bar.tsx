const TopBar = () => {
  return (
    <div className="fixed top-0 w-full z-50 bg-gray-800 text-white p-4 flex justify-between items-center">
      <div className="text-lg font-semibold">MyApp</div>
      <div className="flex items-center">
        <input type="search" placeholder="Search..." className="p-2 bg-gray-700 text-white rounded-md" />
      </div>
      <ul className="flex space-x-4">
        <li><a href="#" className="hover:text-gray-300">Login</a></li>
        <li><a href="#" className="hover:text-gray-300">Signup</a></li>
      </ul>
    </div>
  );
}

export default TopBar;
