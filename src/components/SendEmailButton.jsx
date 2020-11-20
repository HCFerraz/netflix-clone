import {Container, Input, Icon, Button} from './StyledButton'
import { HiOutlineChevronRight } from 'react-icons/hi'

function SendEmailButton(props) {
    return (
        <Container>
            <Input placeholder="Email" />
            <Button>Vamos lá <Icon><HiOutlineChevronRight size="22px" /></Icon></Button>
        </Container>
    )
}

export default SendEmailButton