import styles from './Key.module.scss';

function Key({ color }) {
  return (
    <svg
      className={styles[color]}
      width="15"
      height="15"
      viewBox="0 0 15 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0.5 14.5L8.5 6.5M2.5 12.5L4.5 14.5M4.5 10.5L6.5 12.5M11 7.5C9.067 7.5 7.5 5.933 7.5 4C7.5 2.067 9.067 0.5 11 0.5C12.933 0.5 14.5 2.067 14.5 4C14.5 5.933 12.933 7.5 11 7.5Z"
        stroke="black"
      />
    </svg>
  );
}

export default Key;
