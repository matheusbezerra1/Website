import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from '@chakra-ui/react'

function title() {
  return (
    <TableContainer>
    <Table variant='simple'>
      <TableCaption></TableCaption>
      <Thead>
        <Tr>
          <Th>Name</Th>
          <Th>Size</Th>
        </Tr>
      </Thead>
      <Tbody>
        <Tr>
          <Td>Fork Drawer</Td>
          <Td>Small</Td>
        </Tr>
        <Tr>
          <Td>Plate Drawer</Td>
          <Td>Medium</Td>
        </Tr>
        <Tr>
          <Td>Port Drawer</Td>
          <Td>Large</Td>
        </Tr>
      </Tbody>
    </Table>
  </TableContainer>
  )
}

export default title