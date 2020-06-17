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
import AddIcon from "@material-ui/icons/Add";
const Locations = (props) => {
  const locations = useSelector((state) => state.LocationReducer.locations);
  const categories = useSelector((state) => state.CategoryReducer.categories);
  const dispatch = useDispatch();

  const RemoveLocationEvent = (location) => {
    dispatch(removeLocation(location));
  };
  return (
    <div className="locations-page">
      {locations.length > 0 ? (
        <List>
          {locations.map((location, index) => {
            console.log(location);
            return (
              <ListItemLink>
                <Link key={index} to={"/Location/" + location.id}>
                  <ListItemText
                    key={index}
                    primary={location.name}
                    secondary={
                      <div>
                        <ul class="list-unstyled">
                          <li>
                            Category:
                            {categories.map((category) => {
                              if (category.id == location.categoryID)
                                return <span>{category.name}</span>;
                            })}
                          </li>
                          <li>Latitude:{location.latitude}</li>
                          <li>Longtitude:{location.longtitude}</li>
                          <li>Address:{location.address}</li>
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
      <div>
        <Link to="/Locations/Add">
          <IconButton>
            <AddIcon></AddIcon>
          </IconButton>
        </Link>
      </div>
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
