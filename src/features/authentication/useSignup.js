import { useMutation } from "@tanstack/react-query";
import { signup as signupApi } from "../../services/apiAuth";
import toast from "react-hot-toast";

export function useSignup() {
  const { mutate: signup, isLoading } = useMutation({
    mutationFn: signupApi,
    onSuccess: () => {
      toast.success(
        "Account successfully created, an email for verification has just sent to your email."
      );
    },
    onError: (error) => {
      toast.error(error.message || "An error occurred during registration");
    },
  });

  return { signup, isLoading };
}
