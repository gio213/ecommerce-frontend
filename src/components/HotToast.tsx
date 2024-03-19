import { useEffect } from "react";
import toast from "react-hot-toast";

type HotToastProps = {
  message: string;
  status: number;
};

export const HotToast = ({ message, status }: HotToastProps) => {
  useEffect(() => {
    if (status === 200) {
      toast.success(message);
    } else if (status === 400) {
      toast.error(message);
    } else if (status === 401) {
      toast.error(message);
    }
  }, [message, status]);

  return <></>;
};
