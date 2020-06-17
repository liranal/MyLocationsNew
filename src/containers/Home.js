import React from "react";
import { useSelector } from "react-redux";
import {
  ExpansionPanel,
  ExpansionPanelSummary,
  Typography,
  ExpansionPanelDetails,
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
const Home = (props) => {
  const locations = useSelector((state) => state.LocationReducer.locations);
  const categories = useSelector((state) => state.CategoryReducer.categories);

  return (
    <div className="home-page">
      {categories.length > 0 ? (
        categories.map((category) => {
          return (
            <div>
              <ExpansionPanel>
                <ExpansionPanelSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography>{category.name}</Typography>
                </ExpansionPanelSummary>

                {locations.map((location) => {
                  if (location.categoryID == category.id) {
                    return (
                      <ExpansionPanelDetails>
                        <ExpansionPanel>
                          <ExpansionPanelSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                          >
                            <Typography>{location.name}</Typography>
                          </ExpansionPanelSummary>
                          <ExpansionPanelDetails>
                            <Typography color="textSecondary">
                              <ul class="list-unstyled">
                                <li>Latitude:{location.latitude}</li>
                                <li>Longtitude:{location.longtitude}</li>
                                <li>Address:{location.address}</li>
                              </ul>
                            </Typography>
                          </ExpansionPanelDetails>
                        </ExpansionPanel>
                      </ExpansionPanelDetails>
                    );
                  }
                })}
              </ExpansionPanel>
            </div>
          );
        })
      ) : (
        <span>No Data</span>
      )}
    </div>
  );
};

export default Home;
