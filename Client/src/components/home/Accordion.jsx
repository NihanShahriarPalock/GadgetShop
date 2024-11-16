

const Accordion = () => {
  return (
      <div className="my-16 flex flex-col w-3/4 mx-auto  ">
          <h2 className="font-bold text-center text-2xl mb-8">Frequently Asked Question</h2>
      <div className='collapse collapse-arrow bg-base-200'>
        <input type='radio' name='my-accordion-2' defaultChecked />
        <div className='collapse-title text-xl font-medium'>
          Click to open this one and close others
        </div>
        <div className='collapse-content'>
          <p>hello</p>
        </div>
      </div>
      <div className='collapse collapse-arrow bg-base-200'>
        <input type='radio' name='my-accordion-2' />
        <div className='collapse-title text-xl font-medium'>
          Click to open this one and close others
        </div>
        <div className='collapse-content'>
          <p>hello</p>
        </div>
      </div>
      <div className='collapse collapse-arrow bg-base-200'>
        <input type='radio' name='my-accordion-2' />
        <div className='collapse-title text-xl font-medium'>
          Click to open this one and close others
        </div>
        <div className='collapse-content'>
          <p>hello</p>
        </div>
      </div>
    </div>
  );
}

export default Accordion