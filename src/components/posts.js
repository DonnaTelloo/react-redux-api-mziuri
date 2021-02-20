import React from 'react'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';

function PostsComponent({
    title,
    desc
}) {
    return (
            <ListItem alignItems="flex-start">
                <ListItemAvatar>
                    <Avatar alt={title} />
                </ListItemAvatar>
                <ListItemText
                primary={title}
                secondary={
                    <React.Fragment>
                    <Typography
                        component="span"
                        variant="body2"
                        color="textPrimary"
                    >
                        {desc}
                    </Typography>
                    </React.Fragment>
                }
                />
            </ListItem>
    )
}

export default PostsComponent
