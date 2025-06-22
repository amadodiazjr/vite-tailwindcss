import { footer } from "../styles/selectors"

function Footer() {
  const year = new Date().getFullYear()
  return (
    <>
      <p id={footer.name} className="text-center fixed md:relative"><span tabIndex={0}>&copy; {year} Testables LLC.  All rights reserved.</span></p>
    </>
  )
}

export default Footer