import Review from "./Review";


const UserReview = () => {
  return (
    <>
      <h2 className="text-center font-bold text-2xl mb-12">Review From User</h2>
      <div className='flex justify-between gap-4'>
        <Review></Review>
        <Review></Review>
        <Review></Review>
      </div>
    </>
  );
}

export default UserReview