export default function AnimatedDots() {
  return (
    <div
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        overflow: "hidden",
        pointerEvents: "none",
        opacity: 0.1,
      }}
    >
      <div
        style={{
          position: "absolute",
          top: "80px",
          left: "40px",
          width: "8px",
          height: "8px",
          backgroundColor: "#EF5DA8",
          borderRadius: "50%",
          animation: "pulse 2s infinite",
        }}
      ></div>
      <div
        style={{
          position: "absolute",
          top: "160px",
          right: "80px",
          width: "4px",
          height: "4px",
          backgroundColor: "#EF5DA8",
          borderRadius: "50%",
          animation: "ping 1s infinite",
        }}
      ></div>
      <div
        style={{
          position: "absolute",
          bottom: "128px",
          left: "25%",
          width: "6px",
          height: "6px",
          backgroundColor: "#EF5DA8",
          borderRadius: "50%",
          animation: "pulse 2s infinite",
          animationDelay: "0.3s",
        }}
      ></div>
      <div
        style={{
          position: "absolute",
          bottom: "80px",
          right: "33%",
          width: "4px",
          height: "4px",
          backgroundColor: "#EF5DA8",
          borderRadius: "50%",
          animation: "ping 1s infinite",
          animationDelay: "0.7s",
        }}
      ></div>
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          width: "4px",
          height: "4px",
          backgroundColor: "#EF5DA8",
          borderRadius: "50%",
          animation: "pulse 2s infinite",
          animationDelay: "0.5s",
        }}
      ></div>
      <style>{`
        @keyframes pulse {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.5;
          }
        }
        @keyframes ping {
          75%, 100% {
            transform: scale(2);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
}
