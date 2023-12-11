import { toast } from 'react-toastify';

export const notifyHelper = () => {
	const errorToast = (content: string) => {
		toast.error(content, {
			icon: false,
		});
	};
	const successToast = (content: string) => {
		toast.success(content, {
			icon: false,
		});
	};

	return { errorToast, successToast };
};
