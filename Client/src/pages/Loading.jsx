import ScaleLoader from "react-spinners/ClipLoader";

const Loading = () => {
  return (
    <div className="min-h-screen flex justify-center items-center">
      <ScaleLoader
        color="#000000"
        loading={true}      
        size={150}
        
      />
    </div>
  );
};

export default Loading;
