const Banner = () => {
  return (
    <>
      <div
        className='hero min-h-screen'
        style={{
          backgroundImage:
            "url(https://img.pikbest.com/wp/202408/tablet-monitor-office-essentials-technology-and-gadgets-illustration-featuring-laptop-printer-camera-pc-mobile-phone-headphones_9762044.jpg!sw800)",
        }}>
        <div className='hero-overlay bg-opacity-60'></div>
        <div className='hero-content text-neutral-content text-center'>
          <div className='max-w-md'>
            <h1 className='mb-5 text-5xl font-bold'>Welcome to Gadget Shop</h1>
            <p className='mb-5'>
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className='btn btn-primary'>Get Started</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
