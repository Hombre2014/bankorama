import { z } from 'zod';
import React from 'react';
import { Control, FieldPath } from 'react-hook-form';

import { Input } from './ui/input';
import { authFormSchema } from '@/lib/utils';
import { FormControl, FormField, FormLabel, FormMessage } from './ui/form';

const formSchema = authFormSchema('sign-up');

interface CustomInput {
  id: string;
  control: Control<z.infer<typeof formSchema>>;
  name: FieldPath<z.infer<typeof formSchema>>;
  label: string;
  placeholder: string;
}

const CustomInput = ({
  id,
  control,
  name,
  label,
  placeholder,
}: CustomInput) => {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <div className="form-item">
          <FormLabel className="form-label">{label}</FormLabel>
          <div className="flex w-full flex-col">
            <FormControl>
              <Input
                id={id}
                placeholder={placeholder}
                className="input-class"
                {...field}
                type={name === 'password' ? 'password' : 'text'}
              />
            </FormControl>
            <FormMessage className="form-message mt-2" />
          </div>
        </div>
      )}
    />
  );
};

export default CustomInput;
