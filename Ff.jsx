import { Button, Grid } from "@mui/material";
import React, { useState } from "react";

export const Ff = () => {
  const [check, setCheck] = useState();
  const [rad, setRad] = useState();
  function handleData(e) {
    e.preventDefault();
    console.log(check, rad);
  }

  const handleAdd = () => {
    console.log(rad, check);
  };
  return (
    <React.Fragment>
      <form action="" onSubmit={handleData}>
        <br />
        <br />
        <label style={{ marginLeft: "20px", marginRight: "20px" }}>
          Have you been diagnosed with this problem ?
        </label>
        <input
          value={rad}
          onChange={(e) => setRad(e.target.value)}
          type="radio"
          name="sk"
          id="xyz"
        />
        <label htmlFor=""> Not relevant </label>
        <input
          value={rad}
          onChange={(e) => setRad(e.target.value)}
          type="radio"
          name="sk"
          id="abc"
        />{" "}
        <label htmlFor=""> Yes </label>
        <input
          value={rad}
          onChange={(e) => setRad(e.target.value)}
          type="radio"
          name="sk"
          id="efg"
        />{" "}
        <label htmlFor=""> No </label>
        <br />
        <br />
        <label style={{ marginLeft: "20px", marginRight: "20px" }}>
          Did the problem start after a physical trauma ?
        </label>
        <input
          onChange={(e) => setRad(e.target.checked)}
          type="radio"
          name="eg"
          id="xyz"
        />
        <label htmlFor=""> Not relevant </label>
        <input
          onChange={(e) => setRad(e.target.checked)}
          type="radio"
          name="eg"
          id="abc"
        />{" "}
        <label htmlFor=""> Yes </label>
        <input
          onChange={(e) => setRad(e.target.checked)}
          type="radio"
          name="eg"
          id="efg"
        />{" "}
        <label htmlFor=""> No </label>
        <br />
        <br />
        <label style={{ marginLeft: "20px", marginRight: "20px" }}>
          Did the problem start after a mental trauma ?
        </label>
        <input
          onChange={(e) => setRad(e.target.checked)}
          type="radio"
          name="rj"
          id="xyz"
        />
        <label htmlFor=""> Not relevant </label>
        <input
          onChange={(e) => setRad(e.target.checked)}
          type="radio"
          name="rj"
          id="abc"
        />{" "}
        <label htmlFor=""> Yes </label>
        <input
          onChange={(e) => setRad(e.target.checked)}
          type="radio"
          name="rj"
          id="efg"
        />{" "}
        <label htmlFor=""> No </label>
        <h5> How often do you experience the problem ? </h5>
        <input
          onChange={(e) => setRad(e.target.checked)}
          type="radio"
          name="th"
          id=""
        />
        <label htmlFor="">Not relevant</label>
        <input
          onChange={(e) => setRad(e.target.checked)}
          type="radio"
          name="th"
          id=""
        />
        <label htmlFor="">Daily</label>
        <input
          onChange={(e) => setRad(e.target.checked)}
          type="radio"
          name="th"
          id=""
        />
        <label htmlFor="">Sevaral time/Week</label>
        <input
          onChange={(e) => setRad(e.target.checked)}
          type="radio"
          name="th"
          id=""
        />
        <label htmlFor="">A few times/Months</label> <br />
        <input
          onChange={(e) => setRad(e.target.checked)}
          type="radio"
          name="th"
          id=""
        />
        <label htmlFor="">A few times/Year</label>
        <h5>When do you experience the problem?</h5>
        <input
          onChange={(e) => setCheck(e.target.checked)}
          type="checkbox"
          name="td"
          id=""
        />
        <label htmlFor="">Not relevant</label> <br /> <br />
        <input
          onChange={(e) => setCheck(e.target.checked)}
          type="checkbox"
          name="td"
          id=""
        />
        <label htmlFor="">When lying down</label> <br /> <br />
        <input
          onChange={(e) => setCheck(e.target.checked)}
          type="checkbox"
          name="td"
          id=""
        />
        <label htmlFor="">When sitting</label>
        <br />
        <br />
        <input
          onChange={(e) => setCheck(e.target.checked)}
          type="checkbox"
          name="td"
          id=""
        />
        <label htmlFor="">Under standing</label>
        <br />
        <br />
        <input
          onChange={(e) => setCheck(e.target.value)}
          type="checkbox"
          name=""
          id=""
        />
        <label htmlFor="">In walking</label>
        <h5>
          How intense is the experience of the problems on average on a 0-10
          scale?
        </h5>
        <Grid container spacing={2}>
          <Grid item xs={1}>
            1
          </Grid>
          <Grid item xs={1}>
            2
          </Grid>
          <Grid item xs={1}>
            3
          </Grid>
          <Grid item xs={1}>
            4
          </Grid>
          <Grid item xs={1}>
            5
          </Grid>
          <Grid item xs={1}>
            6
          </Grid>
          <Grid item xs={1}>
            7
          </Grid>
          <Grid item xs={1}>
            8
          </Grid>
          <Grid item xs={1}>
            9
          </Grid>
          <Grid item xs={1}>
            10
          </Grid>
        </Grid>
        <Grid container spacing={1}>
          <Grid item xs={1}>
            <input type="radio" name="ms" id="" />
          </Grid>
          <Grid item xs={1}>
            <input type="radio" name="ms" id="" />
          </Grid>
          <Grid item xs={1}>
            <input type="radio" name="ms" id="" />
          </Grid>
          <Grid item xs={1}>
            <input type="radio" name="ms" id="" />
          </Grid>
          <Grid item xs={1}>
            <input type="radio" name="ms" id="" />
          </Grid>
          <Grid item xs={1}>
            <input type="radio" name="ms" id="" />
          </Grid>
          <Grid item xs={1}>
            <input type="radio" name="ms" id="" />
          </Grid>
          <Grid item xs={1}>
            <input type="radio" name="ms" id="" />
          </Grid>
          <Grid item xs={1}>
            <input type="radio" name="ms" id="" />
          </Grid>
          <Grid item xs={1}>
            <input type="radio" name="ms" id="" />
          </Grid>
        </Grid>
        -----------------------------------------------------------------------
        --------------------
        <Button
          onClick={handleAdd}
          style={{ borderRadius: "50%" }}
          variant="contained"
        >
          +
        </Button>
        ------------------------------------------------------------------------------------{" "}
        <br /> <br /> <br />
        <Button style={{ marginLeft: "42%" }} variant="contained">
          Back
        </Button>
        <Button style={{ marginLeft: "2%" }} variant="contained">
          Next
        </Button>
      </form>
    </React.Fragment>
  );
};
