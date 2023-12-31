import React from "react";
import { Grid, TextField } from "@material-ui/core";
import { useFormContext, Controller } from "react-hook-form";

const FormInput = ({ name, label }) => {
  const { control } = useFormContext();

  return (
    <Grid item xs={12} sm={6}>
      <Controller
        control={control}
        name={name}
        rules={{ required: true }}
        defaultValue=""
        render={({ field }) => (
          <TextField fullWidth label={label} required {...field} />
        )}
      />
    </Grid>
  );
};

export default FormInput;
