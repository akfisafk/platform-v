import { withStyles } from '@material-ui/core/styles';
import MuiAccordion from '@material-ui/core/Accordion';
import MuiAccordionSummary from '@material-ui/core/AccordionSummary';
import MuiAccordionDetails from '@material-ui/core/AccordionDetails'

export const Accordion = withStyles({
    root: {
        border: '1px solid #07090d',
        boxShadow: 'none',
        '&:not(:last-child)': {
            borderBottom: 0,
        },
        '&:before': {
            display: 'none',
        },
        '&$expanded': {
            margin: 'auto',
        },
    },
    expanded: {},
})(MuiAccordion);

export const AccordionSummary = withStyles({
    root: {
        borderBottom: '1px solid #07090d',
        backgroundColor: '#0e131a',
        color: '#a5a8a7',
        marginBottom: -1,
        minHeight: 56,
        '&$expanded': {
            minHeight: 56,
        },
        
    },
    content: {
        '&$expanded': {
            margin: '12px .5em',
        },
    },
    expanded: {},
})(MuiAccordionSummary);

export const AccordionDetails = withStyles((theme) => ({
    root: {
        backgroundColor: '#090d12',
        color: '#989c9b',
        padding: theme.spacing(2),
        margin: '0'
    },
}))(MuiAccordionDetails);
