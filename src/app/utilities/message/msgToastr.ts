import { ToastrService, ActiveToast } from 'ngx-toastr';

export function msgAny(
  type: string,
  msg: string,
  title: string,
  toast: ToastrService
): void {
  const params = {
    closeButton: true,
    enableHtml: true,
    progressBar: true,
    positionClass: 'toast-top-right',
    timeOut: 8000,
  };

  switch (type) {
    case 'success':
      toast.success(msg, title, params);
      break;
    case 'error':
      toast.error(msg, title, params);
      break;
    case 'warning':
      toast.warning(msg, title, params);
      break;
    case 'info':
      toast.info(msg, title, params);
      break;
    default:
      toast.clear();
      break;
  }
}
