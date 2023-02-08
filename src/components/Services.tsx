import { FC, SyntheticEvent, useState } from 'react';
import { ServiceDescription } from '../types';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Typography from '@mui/material/Typography';
import AccordionDetails from '@mui/material/AccordionDetails';
import Button from '@mui/material/Button';

interface ServicesProps {
  services: ServiceDescription[];
}

export const Services: FC<ServicesProps> = ({ services }) => {
  const [expanded, setExpanded] = useState<string>();

  const handleChange = (panel: string) => (event: SyntheticEvent, isExpanded: boolean) =>
    setExpanded(isExpanded ? panel : undefined);

  return (
    <>
      {services.map(item => (
        <Accordion key={item.api} expanded={item.api === expanded} onChange={handleChange(item.api)}>
          <AccordionSummary expandIcon={<ExpandMoreIcon color="primary"/>}>
            <Typography variant="h6" color="primary">{item.title}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            {item.description.map((text, idx) => (
              <Typography key={idx} textAlign="justify" sx={{ textIndent: '1em', marginBottom: '0.5em', lineHeight: 1.25 }}>
                {text}
              </Typography>)
            )}
            <Button color="primary" href={item.api} target="_blank">Открыть</Button>
          </AccordionDetails>
        </Accordion>
      ))}
    </>
  );
}
