import { Container } from "../../components/container"
import { Search } from "../../components/search"
import { Products } from "../../components/products"


export function Home() {

  return (
    <Container>
        <Search/>
        <Products/>
    </Container>
  )
}
