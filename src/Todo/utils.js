export const handleKeyDown = (event, func, key) => {
  if (event.key === key) {
    func()
  }
}