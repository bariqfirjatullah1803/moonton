export default function PrimaryButton({className = '', variant = 'primary', type, disabled, children, ...props}) {
    return (<button
        {...props}
        className={`rounded-2xl py-[13px] text-center w-full ${disabled && 'opacity-30'} btn-${variant} ${className}`}
        disabled={disabled}
        type={type}
    >
        {children}
    </button>);
}
