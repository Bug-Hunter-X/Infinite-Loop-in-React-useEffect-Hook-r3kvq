```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Correct logic: only runs when the component mounts
    // and when props changes
    // Add any props that might affect the count as dependency.
  }, []);

  const incrementCount = () => {
      setCount(prevCount => prevCount + 1);
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={incrementCount}>Increment</button>
    </div>
  );
}
```