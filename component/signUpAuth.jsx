import { useEffect, useRef } from 'react';

const SignUpAuthCapture = () => {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);

  useEffect(() => {
    const initCamera = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true });

        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }

        captureImage();
      } catch (error) {
        console.error('Error accessing camera:', error);
      }
    };

    const captureImage = () => {
      setTimeout(() => {
        const video = videoRef.current;
        const canvas = canvasRef.current;

        if (video && canvas) {
          const context = canvas.getContext('2d');
          context.drawImage(video, 0, 0, canvas.width, canvas.height);

          // Draw the captured image on the screen
          const imageDataUrl = canvas.toDataURL('image/png');
          const imgElement = document.createElement('img');
          imgElement.src = imageDataUrl;

          // Append the image element to the document body or any other container
          document.body.appendChild(imgElement);

          // In a real application, you might want to send this image data to a server for saving.
        }
      }, 3000);
    };

    initCamera();

    return () => {
      // Clean up resources if needed (e.g., stop the camera stream).
      const video = videoRef.current;
      if (video) {
        const stream = video.srcObject;
        if (stream) {
          const tracks = stream.getTracks();
          tracks.forEach(track => track.stop());
        }
      }
    };
  }, []);

  return (
    <div>
      <h1>Camera Capture</h1>
      <video ref={videoRef} autoPlay playsInline muted style={{ display: 'none' }} />
      <canvas ref={canvasRef} width={640} height={480} style={{ display: 'none' }} />
    </div>
  );
};

export default SignUpAuthCapture;
