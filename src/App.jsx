import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { decryptMessage, encryptMessage } from "./utils/message";

export default function App() {
  const [message, setMessage] = useState("");
  const [key, setKey] = useState(0);
  const [result, setResult] = useState("");
  function handleDecode(msg, key) {
    const decryptResult = decryptMessage(msg, key);
    setResult(decryptResult);
  }
  function handleEncode(msg, key) {
    const encryptResult = encryptMessage(msg, key);
    setResult(encryptResult);
  }
  function handleMessage(e) {
    setMessage(e.target.value);
  }

  function copyText(e) {
    navigator.clipboard.writeText(e.target.innerText);
    toast.success("Text copied to clipboard!");
  }

  return (
    <div className='h-full w-full'>
      <Toaster position='bottom-center' />
      <div className='w-fit shadow-md p-2 md:p-5 mx-auto'>
        <div>
          <h1 className='md:text-3xl text-2xl text-violet-400 font-bold text-center mb-5'>
            Make Your Message Private!
          </h1>
        </div>
        <div className='shadow-md'>
          <fieldset className='fieldset bg-base-300 border-base-300 rounded-box w-xs md:w-md lg:w-lg xl:w:xl 2xl:w-2xl mt-5 border p-4'>
            <legend className='fieldset-legend text-xl w-full rounded-2xl'>
              Secret Message
            </legend>

            <fieldset className='fieldset rounded-md border-2 mb-5 border-gray-500 p-2 w-1/2 ml-[50%]'>
              <legend className='fieldset-legend text-sm'>Secret Key</legend>
              <input
                required
                onChange={(e) => setKey(e.target.value)}
                type='number'
                placeholder='Secret Key'
                className='w-full text-lg h-full bg-transparent border-none outline-none focus:outline-none focus:ring-0'
              />
            </fieldset>

            <fieldset className='fieldset rounded-md w-xs md:w-md lg:w-lg xl:w:xl 2xl:w-2xl border-2 mb-5 border-gray-500 p-2'>
              <legend className='fieldset-legend'>Enter Your Message</legend>
              <textarea
                required
                defaultValue={message}
                onChange={handleMessage}
                placeholder='Enter Your Message Here...'
                className='textarea text-lg w-full h-48 bg-transparent border-none outline-none focus:outline-none focus:ring-0'
              ></textarea>
            </fieldset>
            {result && (
              <p className='text-sm p-1'>
                <span className='text-sm font-semibold'>Your Message</span>:{" "}
                <div className='tooltip tooltip-info' data-tip='Click to Copy'>
                  <span className='cursor-pointer' onClick={copyText}>
                    {result ? result : ""}
                  </span>
                </div>
              </p>
            )}
            <div className='mt-5 flex justify-between'>
              <button
                onClick={() => handleDecode(message, key)}
                className='btn btn-primary'
              >
                Decode
              </button>
              <button
                onClick={() => handleEncode(message, key)}
                className='btn btn-info'
              >
                Encode
              </button>
            </div>
          </fieldset>
        </div>
      </div>
    </div>
  );
}
