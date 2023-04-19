import MailchimpSubscribe from "react-mailchimp-subscribe";
import Newsletter from "../Newsletter/Newsletter";

type FormData = {
  [key: string]: string;
};

type MailchimpProps = {
  subscribe: (formData: FormData) => void;
  status: string | null;
  message: string | Error | null;
};

export const MailchimpForm = () => {
  const postUrl = `${process.env.REACT_APP_MAILCHIMP_URL}?u=${process.env.REACT_APP_MAILCHIMP_U}&id=${process.env.REACT_APP_MAILCHIMP_ID}`;

  const handleValidated =
    (subscribe: MailchimpProps["subscribe"]) => (formData: FormData) => {
      subscribe(formData);
    };

  return (
    <MailchimpSubscribe url={postUrl}>
      {({ subscribe, status, message }: MailchimpProps) => (
        <Newsletter
          status={status ?? ""}
          message={
            message instanceof Error ? "An error occurred" : message || ""
          }
          onValidated={handleValidated(subscribe)}
        />
      )}
    </MailchimpSubscribe>
  );
};
