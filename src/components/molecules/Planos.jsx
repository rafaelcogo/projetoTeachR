import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import Grid from "@mui/material/Grid";
import StarIcon from "@mui/icons-material/StarBorder";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

const tiers = [
  {
    title: "Free",
    price: "0",
    description: [
      "1 usuário",
      "2 GB de armazenamento",
      "Central de Ajuda",
      "Email de suporte",
    ],
    buttonText: "Começe de Graça",
    buttonVariant: "outlined",
  },
  {
    title: "Pro",
    subheader: "Mais Popular",
    price: "149",
    description: [
      "20 usuários incluidos",
      "10 GB de armazenamento",
      "Central de Ajuda",
      "Email de suporte",
    ],
    buttonText: "Mais Popular",
    buttonVariant: "contained",
  },
  {
    title: "Enterprise",
    price: "349",
    description: [
      "50 usuários incluidos",
      "30 GB de armazenamento",
      "Central de Ajuda",
      "Email de suporte",
    ],
    buttonText: "Contate-Nos",
    buttonVariant: "outlined",
  },
];

function PricingContent() {
  return (
    <React.Fragment>
      {/* Hero unit */}
      <Container
        disableGutters
        maxWidth="sm"
        component="main"
        sx={{ pt: 8, pb: 6 }}
      >
        <Typography
          fontFamily={"Lato"}
          component="h2"
          variant="h3"
          align="center"
          color="text.primary"
          gutterBottom
        >
          Planos
        </Typography>
        <Typography
          fontFamily={"Lato"}
          variant="h6"
          align="center"
          color="text.secondary"
          component="p"
        >
          Para impulsionar ainda mais um aprendizado para o futuro, a Teach
          oferece produtos que complementam a experiência da escola, professores
          e estudantes, deixando-a mais estruturada e inovadora.
        </Typography>
      </Container>
      {/* End hero unit */}
      <Container maxWidth="md" component="main">
        <Grid container spacing={5} alignItems="flex-end">
          {tiers.map((tier) => (
            // Enterprise card is full width at sm breakpoint
            <Grid
              item
              key={tier.title}
              xs={12}
              sm={tier.title === "Enterprise" ? 12 : 6}
              md={4}
            >
              <Card>
                <CardHeader
                  title={tier.title}
                  subheader={tier.subheader}
                  titleTypographyProps={{ align: "center" }}
                  action={tier.title === "Pro" ? <StarIcon /> : null}
                  subheaderTypographyProps={{
                    align: "center",
                  }}
                  sx={{
                    backgroundColor: (theme) =>
                      theme.palette.mode === "light"
                        ? theme.palette.grey[200]
                        : theme.palette.grey[700],
                  }}
                />
                <CardContent>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "baseline",
                      mb: 2,
                    }}
                  >
                    <Typography
                      fontFamily={"Lato"}
                      component="h2"
                      variant="h3"
                      color="text.primary"
                    >
                      R${tier.price}
                    </Typography>
                    <Typography variant="h6" color="text.secondary">
                      /mês
                    </Typography>
                  </Box>
                  <ul>
                    {tier.description.map((line) => (
                      <Typography
                        component="li"
                        variant="subtitle1"
                        align="center"
                        key={line}
                      >
                        {line}
                      </Typography>
                    ))}
                  </ul>
                </CardContent>
                <CardActions>
                  <Button fullWidth variant={tier.buttonVariant}>
                    {tier.buttonText}
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </React.Fragment>
  );
}

export default function Pricing() {
  return <PricingContent />;
}
