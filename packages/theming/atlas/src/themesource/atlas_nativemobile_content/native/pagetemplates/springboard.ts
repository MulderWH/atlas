/*
==========================================================================
    Dashboards

==========================================================================
*/
// == Elements
// -------------------------------------------------------------------------------------------------------------------//
import { flexMain } from "../../../atlas_core/native/core/base/flex";
import { card } from "../buildingblocks/card";

export const boardCard = {
    container: {
        ...flexMain.container,
        ...card.container,
        height: 104
    }
};