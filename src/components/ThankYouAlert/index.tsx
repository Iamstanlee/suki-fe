/* eslint-disable react/display-name */
import React, { ReactNode } from 'react';
import * as AlertDialog from '@radix-ui/react-alert-dialog';
import Link from 'next/link';

interface ThankYouAlertProps {
  title: string;
  description: string;
  cta: string;
  onCtaRedirectUrl: string;
  isOpen: boolean;
  onOpenChange: (isOpen: boolean) => void;
  children?: ReactNode;
}

export default function ThankYouAlertDialog({
  title,
  description,
  cta,
  onCtaRedirectUrl,
  isOpen,
  onOpenChange,
  children,
}: ThankYouAlertProps) {
  return (
    <AlertDialog.Root open={isOpen} onOpenChange={onOpenChange}>
      {children}
      <AlertDialog.Portal>
        <AlertDialog.Overlay
          className="fixed inset-[0px] bg-black opacity-[0.5]"
          onClick={() => onOpenChange(!isOpen)}
        ></AlertDialog.Overlay>
        <AlertDialog.Content
          className="max-w-[907px] w-[60%] md:w-[85%] xl:w-[85%] fixed top-[60%] left-[50%] -translate-y-2/3 -translate-x-1/2 bg-primary-1 rounded-2xl border-4 border-white py-[72px] px-[40px] md:py-[43px] md:px-[29px]"
          asChild
        >
          <div className="flex flex-col gap-y-7.5 items-center">
            <h1 className="title text-center">{title}</h1>
            <span className="text-center max-w-[666px]">{description}</span>
            <Link href={onCtaRedirectUrl}>
              <button className="btn !bg-black uppercase">{cta}</button>
            </Link>
          </div>
        </AlertDialog.Content>
      </AlertDialog.Portal>
    </AlertDialog.Root>
  );
}
