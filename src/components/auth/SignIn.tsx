'use client';

import React, { useActionState } from 'react';
import Form from 'next/form';
import { Loader2 } from 'lucide-react';

const initialState = {
    message: '',
};

type SignInProps = {
    action: (prevState: any, formData: FormData) => Promise<{ message: string } | undefined>;
};

const SignIn = ({ action }: SignInProps) => {
    const [state, formAction, isPending] = useActionState(action, initialState);

    return (
        <Form action={formAction} className='max-w-md mx-auto my-16 p-8 bg-white rounded-lg shadow-md'>
            <h1 className='text-2xl font-bold text-center mb-2'>Xush kelibsiz!</h1>
            <p className='text-center text-sm text-gray-600 mb-6'>Eksklyuziv aʼzolik shartnomalariga ulanish uchun tizimga kiring.</p>

            <div className='space-y-6'>
                {/* Email */}
                <div className='space-y-2'>
                    <label htmlFor='email' className='block text-sm font-medium text-gray-700'>
                        Email manzilingiz
                    </label>
                    <input
                        type='email'
                        id='email'
                        name='email'
                        autoComplete='email'
                        required
                        className='w-full px-4 py-3 border border-gray-200 rounded-md focus:ring-2 focus:ring-black focus:border-transparent transition-colors'
                        placeholder='Emailingizni kiriting'
                    />
                </div>

                {/* Password */}
                <div className=''>
                    <label htmlFor='password' className='block text-sm font-medium text-gray-700'>
                        Parolingiz
                    </label>
                    <input
                        type='password'
                        id='password'
                        name='password'
                        autoComplete='new-password'
                        required
                        className='w-full px-4 py-3 border border-gray-200 rounded-md focus:ring-2 focus:ring-black focus:border-transparent transition-colors'
                        placeholder='Password yarating'
                    />
                </div>

                {/* Copywriting */}
                <div className='text-center'>
                    <p className='text-xs text-gray-500 mb-2'>⚡️ A&apos;zolar barcha buyurtmalar uchun qo&apos;shimcha 15% tejashadi!</p>
                    <p className='text-xs text-gray-500 mb-4'>🛍️ $15.00 dan ortiq buyurtmalar uchun bepul yetkazib berishni qo&apos;lga kiriting</p>
                </div>

                {/* Submit Button */}
                <button
                    type='submit'
                    disabled={isPending}
                    className={`w-full bg-rose-600 text-white py-3 rounded-md hover:bg-rose-700 transition-colors font-medium flex items-center justify-center gap-2 ${isPending ? 'cursor-not-allowed' : ''}`}
                >
                    {isPending ? (
                        <React.Fragment>
                            <Loader2 className='h-4 w-4 animate-spin' />
                            Hisobga kirilmoqda...
                        </React.Fragment>
                    ) : (
                        'HISOBGA KIRISH'
                    )}
                </button>

                {state?.message && state.message.length > 0 && (
                    <p className='text-center text-sm text-red-600'>
                        {state.message}
                    </p>
                )}
            </div>
        </Form>
    );
};

export default SignIn;
