import React from "react";
import { connect, useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { ListItemLink } from "../components/ListItemLink";
import {
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
  List,
  Typography,
} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import { removeLocation } from "../actions/locations.actions";

const Locations = (props) => {
  const locations = useSelector((state) => state.LocationReducer.locations);
  const dispatch = useDispatch();

  const RemoveLocationEvent = (location) => {
    dispatch(removeLocation(location));
  };
  return (
    <div className="locations-page">
      {locations.length > 0 ? (
        <List>
          {locations.map((location, index) => {
            return (
              <ListItemLink>
                <Link key={index} to={"/Location/" + location.id}>
                  <ListItemText
                    key={index}
                    primary={location.name}
                    secondary={
                      <div>
                        <ul>
                          <li>Category:{location.categoryID}</li>
                        </ul>
                      </div>
                    }
                  />
                </Link>
                <ListItemSecondaryAction>
                  <IconButton
                    edge="end"
                    aria-label="delete"
                    onClick={() => RemoveLocationEvent(location)}
                  >
                    <DeleteIcon key={index} />
                  </IconButton>
                </ListItemSecondaryAction>
              </ListItemLink>
            );
          })}
        </List>
      ) : (
        <div>No Locations</div>
      )}
      <Link to="/Locations/Add">Add</Link>
    </div>
  );
};

/*const mapStateToProps = (state) => {
  return {
    siteName: state.siteName,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    changeSiteName(newSiteName) {
      dispatch({
        type: "CHANGE_SITE_NAME",
        payload: newSiteName,
      });
    },
  };
};
*/
//export default connect(mapStateToProps, mapDispatchToProps)(Locations);

export default Locations;
