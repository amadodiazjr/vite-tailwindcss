function Footer() {
  const year = new Date().getFullYear()
  return (
    <>
      <p id={"footer"} className="text-center relative bottom-0 sm:fixed sm:bottom-0"><span tabIndex={0}>&copy; {year} Testables LLC.  All rights reserved.</span></p>
    </>
  )
}

export default Footer