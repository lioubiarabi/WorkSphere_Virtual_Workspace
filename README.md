# WorkSphere - Virtual Workspace Manager

WorkSphere is an innovative web application for visual and interactive personnel management within workspaces. The application allows for real-time organization and distribution of employees on a floor plan while integrating role-based access constraints and strict capacity management.

## Key Features

### Core Functionality

  -  **Employee Management**: Add, view, and delete employees with detailed profiles and experience timelines.
  -  **Floor Plan**: Visual representation of 6 office zones.
  -  **Role-Based Access Control**: Logic that strictly prevents unauthorized roles from being assigned to restricted zones.
  -  **Smart Assignment**: Searchable modal to find and assign eligible employees to specific rooms.
  -  **Input Validation**: Robust form validation including Regex for Moroccan phone numbers (`+212`) and URLs.
  -  **Fully Responsive**: Optimized layouts for desktop (grid), tablet, and mobile devices.

###  Office Zones & Capacities

| Zone Name | Capacity | Access Rules |
|-----------|:--------:|--------------|
| **Conference Room** | 10 | Open to All Roles |
| **Staff Room** | 8 | Open to All Roles |
| **Reception** | 6 | Manager, Receptionist, Cleaner |
| **Security Room** | 3 | Manager, Security, Cleaner |
| **Server Room** | 2 | Manager, IT Technician, Cleaner |
| **Archives Room** | 2 | All Roles **EXCEPT** Cleaning Staff |

###  Role Permissions

  - **Manager**: Global access to all zones.
  - **Receptionist**: Restricted to Reception and common areas.
  - **IT Technician**: Exclusive access to Server Room and common areas.
  - **Security Agent**: Exclusive access to Security Room and common areas.
  - **Cleaning Staff**: Access to all rooms **except** Archives.

##  Technologies Used

  - **HTML5**: Semantic structure with modal dialogs and accessibility attributes.
  - **CSS3**:
      - **CSS Grid**: layout for the floor plan mapping.
      - **Flexbox**: Used for avatar stacks and card layouts.
      - **Animations**: Hover effects.
  - **JavaScript (Vanilla)**:
      - DOM manipulation for dynamic rendering.
      - Event delegation for performance.
      - Regex validation (`/^\+212\s?[5-7]\d{8}$/`).
      - Object-based permission and capacity logic.

## Design System

  - **Avatar System**: Stacked, overlapping user avatars (`ui-avatars` API) to visualize room occupancy.
  - **Color Palette**:
      - **Primary**: Green (`#2ecc71`) - Success/Actions
      - **Secondary**: Blue (`#3498db`) - Info/IT
      - **Warning**: Yellow/Amber - Unassign actions
      - **Danger**: Red (`#e74c3c`) - Delete/Full Capacity/Errors
      - **Dark**: Navy (`#2c3e50`) - Text/Security


## Usage Guide

### 1\. Adding an Employee

  - Click the **"Add New"** button in the sidebar.
  - Fill in details. Note: The phone number must be a valid Moroccan format (`+212...`).
  - You can add multiple previous work experiences dynamically.

### 2\. Assigning to Zones

  - Click the floating **"+"** button.
  - A modal will appear showing *only* employees eligible for that specific room.
  - Click "Assign" next to the desired employee.
### 3\. Managing Profiles

  - Click any avatar on the map or in the unassigned list.
  - Use **"Unassign"** to remove them from the map (return to list).
  - Use **"Delete"** to permanently remove them from the system.

## Contributing

Contributions are welcome\! Please feel free to submit a Pull Request.
