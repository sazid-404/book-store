const Empty = ({ children }) => (
    <div className="empty flex justify-center items-center h-64">
      <p className="message text-lg text-gray-600">{children || "No data available."}</p>
    </div>
  );
  
  export default Empty;
  