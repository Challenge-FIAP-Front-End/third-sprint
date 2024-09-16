
import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import { IoIosArrowDropdownCircle } from 'react-icons/io';

interface FaqCardProps {
  pergunta: string,
  resposta: string
}

function FaqCard({ pergunta, resposta }: FaqCardProps) {
  return (
    <Accordion
      sx={{
        backgroundColor: '#7CA6E5',
        borderRadius: '10px',
        boxShadow: 'none',
        '&:before': {
          display: 'none',
        },
      }}
    >
      <AccordionSummary
        expandIcon={<IoIosArrowDropdownCircle size={'1.5rem'} color="black" />}
        aria-controls="panel1-content"
        id="panel1-header"
        sx={{
          fontSize: '1.25rem',
          fontWeight: '600',
        }}
      >
        {pergunta}
      </AccordionSummary>
      <AccordionDetails>
        {resposta}
      </AccordionDetails>
    </Accordion>
  )
}

export default FaqCard