import  notification1  from "../assets/notifications/image-1.png";

const Notification = ({ className, title }) => {
  return (
    <div
      className={`${
        className || ""
      } flex items-center p-4 pr-6 bg-n-9/40 backdrop-blur border border-n-1/10 rounded-2xl gap-5`}
    >
      <img
        src={notification1}
        width={62}
        height={62}
        alt="image"
        className="rounded-xl"
      />

      <div className="flex-1">
        <h6 className="mb-1 font-semibold text-base">{title}</h6>

        <div className="flex font-sans items-center justify-between">
          <h1>Gaming Assets to Money in your Wallet</h1>
        </div>
      </div>
    </div>
  );
};

export default Notification;
