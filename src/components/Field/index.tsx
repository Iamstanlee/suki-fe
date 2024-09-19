import { twMerge } from 'tailwind-merge';
import { forwardRef } from 'react';
import { FieldValues, UseFormRegister } from 'react-hook-form';


type FieldProps = {
  className?: string;
  label?: string;
  textarea?: boolean;
  type?: string;
  value?: string;
  onChange: any;
  placeholder?: string;
  required?: boolean;
  icon?: string;
  disabled?: boolean;
  error?: string;
};


const Field = forwardRef<HTMLInputElement, FieldProps & ReturnType<UseFormRegister<FieldValues>>>(
  ({
     className,
     error,
     label,
     required,
     type,
     textarea,
     disabled,
     placeholder,
     onChange,
     onBlur,
     name,
   }, forwardedRef) => {


    return (
      <div className={`${className}`}>
        {label && (
          <p className="mb-[16px] ">
            <span className="title text-h4 md:text-h5">{label}</span>
            {required && (
              <span className="text-lg md:text-baseSm"> (Required)</span>
            )}
          </p>
        )}
        <div className="relative">
          {textarea ? (
            <textarea
              className={twMerge(
                `w-full h-24 px-5 py-3 bg-white border border-n-1 text-sm text-n-1 font-bold outline-none resize-none transition-colors placeholder:text-n-3 focus:border-purple-1 dark:bg-n-1 dark:border-white dark:text-white dark:focus:border-purple-1 dark:placeholder:text-white/75 ${
                  error ? 'pr-15 !border-red-400' : ''
                }`,
              )}
              name={name}
              onChange={onChange}
              onBlur={onBlur}
              placeholder={placeholder}
              required={required}
              disabled={disabled}
              ref={forwardedRef as any}
            ></textarea>
          ) : (
            <input
              className={twMerge(
                `w-full h-[58px] px-[20px] bg-transparent border border-white rounded-2 text-sm text-white outline-none ${
                  error ? 'pr-15 !border-red-400' : ''
                }`,
              )}
              type={type}
              name={name}
              onChange={onChange}
              onBlur={onBlur}
              placeholder={placeholder}
              required={required}
              disabled={disabled}
              ref={forwardedRef}
            />
          )}
          {error && (
            <span className="p-5 text-sm text-red-500">{error}</span>
          )}
        </div>
      </div>
    );
  });

export default Field;
