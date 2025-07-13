import { useState, useRef } from "react";
import { QRCodeCanvas } from "qrcode.react";
import { toast, ToastContainer } from "react-toastify";
import { toPng } from "html-to-image";
import 'react-toastify/dist/ReactToastify.css';

export default function QRCodeGen() {
  const [text, setText] = useState("");
  const [label, setLabel] = useState("My QR Code");
  const qrRef = useRef();

  const downloadQRWithLabel = () => {
    if (!qrRef.current) return;

    toPng(qrRef.current)
      .then((dataUrl) => {
        const link = document.createElement("a");
        link.download = "qrcode-with-label.png";
        link.href = dataUrl;
        link.click();
        toast.success("QR Code with label downloaded!");
      })
      .catch((err) => {
        console.error("Error generating image", err);
        toast.error("Failed to download QR Code");
      });
  };

  return (
    <div className="max-w-xl mx-auto bg-white shadow-md rounded-lg p-6 mt-10 text-center">
      <ToastContainer position="top-center" autoClose={2000} />

      <h1 className="text-3xl font-bold mb-4 text-blue-700">QR Code Generator</h1>
      <p className="text-gray-600 mb-6">
        Generate a QR code for any text, URL, or message. Add a label and download your QR instantly.
      </p>

      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter text or URL"
        className="w-full mb-4 px-4 py-2 border rounded-md focus:outline-none"
      />

      <input
        type="text"
        value={label}
        onChange={(e) => setLabel(e.target.value)}
        placeholder="Enter label (optional)"
        className="w-full mb-4 px-4 py-2 border rounded-md focus:outline-none"
      />

      {text && (
        <div
          ref={qrRef}
          className="inline-block p-4 bg-gray-50 rounded-lg border shadow-sm"
        >
          <QRCodeCanvas
            value={text}
            size={256}
            includeMargin={true}
            bgColor="#ffffff"
            fgColor="#000000"
            level="H"
          />
          <p className="mt-2 text-gray-700 text-sm">{label}</p>
        </div>
      )}

      {text && (
        <div className="mt-6">
          <button
            onClick={downloadQRWithLabel}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md shadow"
          >
            Download QR Code with Label
          </button>
        </div>
      )}

      <div className="mt-10">
        <p className="text-gray-500 text-sm">
          Scan the QR using any mobile app. Works for websites, business cards, and product tags.
        </p>
      </div>
    </div>
  );
}
