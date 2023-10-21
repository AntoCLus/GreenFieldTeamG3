// import * as React from "react";
// import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
// import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
// import { DatePicker } from "@mui/x-date-pickers/DatePicker";
// import Card from "@mui/material/Card";
// import CardHeader from "@mui/material/CardHeader";
// import CardMedia from "@mui/material/CardMedia";
// import CardContent from "@mui/material/CardContent";
// import CardActions from "@mui/material/CardActions";
// import Collapse from "@mui/material/Collapse";
// import Avatar from "@mui/material/Avatar";
// import IconButton from "@mui/material/IconButton";
// import Typography from "@mui/material/Typography";
// import { red } from "@mui/material/colors";
// import FavoriteIcon from "@mui/icons-material/Favorite";
// import ShareIcon from "@mui/icons-material/Share";
// import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
// import MoreVertIcon from "@mui/icons-material/MoreVert";
// import dayjs from 'dayjs'

// export default function CardsCategory() {
//   const [expanded, setExpanded] = React.useState(false);
//   const [selectedDate, setSelectedDate] = React.useState(dayjs()); 

//   const handleExpandClick = () => {
//     setExpanded(!expanded);
//   };

//   // Function to handle date selection
//   const handleDateChange = (date) => {
//     setSelectedDate(date);
//   };

//   return (
//     <div>
//       <LocalizationProvider dateAdapter={AdapterDayjs}>
//         <DatePicker value={selectedDate} onChange={handleDateChange} />
//       </LocalizationProvider>

//       <Card sx={{ maxWidth: 345 }}>
//         <CardHeader
//           avatar={
//             <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
//               R
//             </Avatar>
//           }
//           action={
//             <IconButton aria-label="settings">
//               <MoreVertIcon />
//             </IconButton>
//           }
//           title="Shrimp and Chorizo Paella"
//           subheader="September 14, 2016"
//         />
//         <CardMedia
//           component="img"
//           height="194"
//           image="/static/images/cards/paella.jpg"
//           alt="Paella dish"
//         />
//         <CardContent>
//           <Typography variant="body2" color="text.secondary">
//             This impressive paella is a perfect party dish and a fun meal to
//             cook together with your guests. Add 1 cup of frozen peas along with
//             the mussels, if you like.
//           </Typography>
//         </CardContent>
//         <CardActions disableSpacing>
//           <IconButton aria-label="add to favorites">
//             <FavoriteIcon />
//           </IconButton>
//           <IconButton aria-label="share">
//             <ShareIcon />
//           </IconButton>
//           {/* <ExpandMore
//             expand={expanded}
//             onClick={handleExpandClick}
//             aria-expanded={expanded}
//             aria-label="show more"
//           >
//             <ExpandMoreIcon />
//           </ExpandMore> */}

//           <IconButton
//             aria-label="show more"
//             onClick={handleExpandClick}
//             aria-expanded={expanded}
//           >
//             <ExpandMoreIcon />
//           </IconButton>
//         </CardActions>
//         <Collapse in={expanded} timeout="auto" unmountOnExit>
//           <CardContent>
//             <Typography paragraph>Method:</Typography>
//             {/* ... (rest of the content) */}
//           </CardContent>
//         </Collapse>
//       </Card>
//       <br></br>
//       <Card sx={{ maxWidth: 345 }}>
//         <CardHeader
//           avatar={
//             <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
//               R
//             </Avatar>
//           }
//           action={
//             <IconButton aria-label="settings">
//               <MoreVertIcon />
//             </IconButton>
//           }
//           title="Another Delicious Dish"
//           subheader="May 20, 2022"
//         />
//         <CardMedia
//           component="img"
//           height="194"
//           image="/static/images/cards/another-dish.jpg"
//           alt="Another delicious dish"
//         />
//         <CardContent>
//           <Typography variant="body2" color="text.secondary">
//             Description of the second dish goes here.
//           </Typography>
//         </CardContent>
//         <CardActions disableSpacing>
//           <IconButton aria-label="add to favorites">
//             <FavoriteIcon />
//           </IconButton>
//           <IconButton aria-label="share">
//             <ShareIcon />
//           </IconButton>
//           <IconButton
//             aria-label="show more"
//             onClick={handleExpandClick}
//             aria-expanded={expanded}
//           >
//             <ExpandMoreIcon />
//           </IconButton>
//         </CardActions>
//         <Collapse in={expanded} timeout="auto" unmountOnExit>
//           <CardContent>
//             <Typography paragraph>Method:</Typography>
//             {/* ... (rest of the content) */}
//           </CardContent>
//         </Collapse>
//       </Card>
//     </div>
//   );
// }


import * as React from "react";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import dayjs from 'dayjs';

export default function CardsCategory() {
  const [expanded, setExpanded] = React.useState(false);
  const [selectedDate, setSelectedDate] = React.useState(dayjs()); // Initialize with a valid dayjs date

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  // Function to handle date selection
  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <div>
        <div style={{ textAlign: 'center', fontWeight: 'bold' }}>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker value={selectedDate} onChange={handleDateChange} />
      </LocalizationProvider>
        </div>
      

      <div style={{ display: 'flex', flexDirection: 'row', gap: 20 }}>
        {/* Card 1 with Date Picker */}
        <Card sx={{ maxWidth: 345, marginTop: '25px'}}>
          <CardHeader
            // avatar={
            //   <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            //     S&S
            //   </Avatar>
            // }
            // action={
            //   <IconButton aria-label="settings">
            //     <MoreVertIcon />
            //   </IconButton>
            // }
            // title="Shrimp and Chorizo Paella"
            // subheader="September 14, 2016"
            // title="Grocery Items"
            title={
              <Typography>
                <span style={{ fontWeight: 'bold', display: 'flex', justifyContent: 'center' }}>Grocery Items</span> 
             
              </Typography>
            }
          />
          <CardMedia
            component="img"
            height="194"
            image="https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_500/https://listonic.com/wp-content/uploads/2023/08/Blood-Type-A-64-1.png"
            alt="Paella dish"
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary">
            Grocery shopping involves purchasing essential food and household items for daily needs. A typical grocery list includes fresh fruits and vegetables, dairy products like milk, cheese, and yogurt, pantry staples such as rice, pasta, and canned goods, bread and baked goods, meat and poultry, seafood, condiments, spices, snacks, beverages, cleaning supplies, toiletries, and pet food if applicable. Grocery shopping aims to fulfill nutritional requirements, maintain a well-stocked kitchen, and cater to personal preferences. It involves browsing aisles, comparing prices, selecting quality products, and ensuring a balanced and varied selection of items to meet the household's needs..
            </Typography>
          </CardContent>
          <CardActions disableSpacing>
            <div>
              <IconButton aria-label="add to favorites">
                <FavoriteIcon />
              </IconButton>
              <IconButton aria-label="share">
                <ShareIcon />
              </IconButton>
              <IconButton
                aria-label="show more"
                onClick={handleExpandClick}
                aria-expanded={expanded}
              >
                <ExpandMoreIcon />
              </IconButton>
            </div>
          </CardActions>
          <Collapse in={expanded} timeout="auto" unmountOnExit>
            <CardContent>
              <Typography paragraph>:</Typography>
    
              <button>Add</button>
              <button>Edit</button>
              <button>Delete</button>
            </CardContent>
          </Collapse>
        </Card>

        {/* Card 2 without Date Picker */}
        <Card sx={{ maxWidth: 345, marginTop: '25px'}}>
          <CardHeader
            // avatar={
            //   <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            //     S&S
            //   </Avatar>
            // }
            // action={
            //   <IconButton aria-label="settings">
            //     <MoreVertIcon />
            //   </IconButton>
            // }
            // title="Clothing"

            // subheader="May 20, 2022"
            title={
              <Typography>
                <span style={{ fontWeight: 'bold', display: 'flex', justifyContent: 'center'  }}>Clothing Items</span> 
              </Typography>
            }
          />
          <CardMedia
            component="img"
            height="194"
            image="https://images.unsplash.com/photo-1532453288672-3a27e9be9efd?auto=format&fit=crop&q=60&w=600&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZmFzaGlvbiUyMGNsb3RoaW5nfGVufDB8fDB8fHww"
            alt="Another delicious dish"
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary">
            <Typography variant="body2" color="text.secondary">
            The clothing shopping list includes essential items for a well-rounded wardrobe. It comprises versatile pieces suitable for various occasions and seasons. The list features a classic white button-down shirt, comfortable jeans, a little black dress, a cozy sweater, a tailored blazer, a pair of sneakers, dress shoes, a stylish handbag, a leather belt, basic t-shirts in different colors, a versatile trench coat, workout attire, socks, and undergarments. These items ensure a fashionable and functional wardrobe, allowing you to create numerous stylish outfits for any event or daily routine..
            </Typography>
            </Typography>
          </CardContent>
          <CardActions disableSpacing>
            <div>
              <IconButton aria-label="add to favorites">
                <FavoriteIcon />
              </IconButton>
              <IconButton aria-label="share">
                <ShareIcon />
              </IconButton>
              <IconButton
                aria-label="show more"
                onClick={handleExpandClick}
                aria-expanded={expanded}
              >
                <ExpandMoreIcon />
              </IconButton>
            </div>
          </CardActions>
          <Collapse in={expanded} timeout="auto" unmountOnExit>
            <CardContent>
              <Typography paragraph></Typography>
              

              <button>Add</button>
              <button>Edit</button>
              <button>Delete</button>
            </CardContent>
          </Collapse>
        </Card>
        <Card sx={{ maxWidth: 345, marginTop: '25px' }}>
          <CardHeader
            // avatar={
            //   <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            //     S&S
            //   </Avatar>
            // }
            // action={
            //   <IconButton aria-label="settings">
            //     <MoreVertIcon />
            //   </IconButton>
            // }
            // title="Gardening"
            // subheader="May 20, 2022"
            title={
              <Typography>
                <span style={{ fontWeight: 'bold', display: 'flex', justifyContent: 'center' }}>Gardening Items</span> 
              </Typography>
            }
          />
          <CardMedia
            component="img"
            height="194"
            image="https://plus.unsplash.com/premium_photo-1678652879435-5d1de0d521d8?auto=format&fit=crop&q=60&w=600&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Z2FyZGVuaW5nJTIwdG9vbHN8ZW58MHx8MHx8fDA%3D"
            alt="Another delicious dish"
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary">
            <Typography variant="body2" color="text.secondary">
            Gardening is the practice of cultivating and nurturing plants, flowers, and vegetables in outdoor spaces like gardens, yards, or even indoor areas like balconies or windowsills. It involves various activities such as preparing the soil, planting seeds or seedlings, watering, fertilizing, pruning, and maintaining the overall health of the plants. Gardeners may also engage in tasks like weeding, mulching, and pest control to promote plant growth and prevent diseases. Gardening can be a rewarding and therapeutic hobby, providing opportunities to connect with nature, beautify the surroundings, and even grow fresh produce for consumption. It allows individuals to create and maintain vibrant and flourishing green spaces..
            </Typography>
            </Typography>
          </CardContent>
          <CardActions disableSpacing>
            <div>
              <IconButton aria-label="add to favorites">
                <FavoriteIcon />
              </IconButton>
              <IconButton aria-label="share">
                <ShareIcon />
              </IconButton>
              <IconButton
                aria-label="show more"
                onClick={handleExpandClick}
                aria-expanded={expanded}
              >
                <ExpandMoreIcon />
              </IconButton>
            </div>
          </CardActions>
          <Collapse in={expanded} timeout="auto" unmountOnExit>
            <CardContent>
              <Typography paragraph></Typography>
              <button>Add</button>
              <button>Edit</button>
              <button>Delete</button>
            </CardContent>
          </Collapse>
        </Card>
        <Card sx={{ maxWidth: 345, marginTop: '25px'}}>
          <CardHeader
            // avatar={
            //   <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            //    S&S
            //   </Avatar>
            // }
            // action={
            //   <IconButton aria-label="settings">
            //     <MoreVertIcon />
            //   </IconButton>
            // }
            // title="Household"
            // subheader="May 20, 2022"
            title={
              <Typography>
                <span style={{ fontWeight: 'bold', display: 'flex', justifyContent: 'center'}}>Household Items</span> 
              </Typography>
            }
          />
          <CardMedia
            component="img"
            height="194"
            image="https://plus.unsplash.com/premium_photo-1686090446908-60fbb45f2805?auto=format&fit=crop&q=60&w=600&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTczfHxob3VzZWhvbGQlMjBpdGVtc3xlbnwwfHwwfHx8MA%3D%3D"
            alt="Another delicious dish"
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary">
            <Typography variant="body2" color="text.secondary">
            Household items are essential tools and products used in daily life to maintain a clean, organized, and functional home. They encompass a wide range of categories, including cleaning supplies such as brooms, mops, vacuum cleaners, and detergents. Kitchenware like pots, pans, utensils, and appliances like microwaves and blenders are also considered household items. Additionally, home furnishings like furniture, bedding, curtains, and decorative items contribute to the comfort and aesthetics of a living space. Other common household items include lighting fixtures, storage containers, bathroom essentials, gardening tools, and safety equipment like fire extinguishers and smoke detectors. These items play a vital role in facilitating daily tasks, enhancing convenience, and creating a pleasant living environment..
            </Typography>
            </Typography>
          </CardContent>
          <CardActions disableSpacing>
            <div>
              <IconButton aria-label="add to favorites">
                <FavoriteIcon />
              </IconButton>
              <IconButton aria-label="share">
                <ShareIcon />
              </IconButton>
              <IconButton
                aria-label="show more"
                onClick={handleExpandClick}
                aria-expanded={expanded}
              >
                <ExpandMoreIcon />
              </IconButton>
            </div>
          </CardActions>
          <Collapse in={expanded} timeout="auto" unmountOnExit>
            <CardContent>
              <Typography paragraph></Typography>
              <button>Add</button>
              <button>Edit</button>
              <button>Delete</button>
            </CardContent>
          </Collapse>
        </Card>
      </div>
    </div>
  );
}



